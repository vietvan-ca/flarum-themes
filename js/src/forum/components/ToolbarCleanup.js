/**
 * PageManager - Handles toolbar cleanup and loading state management
 * Addresses timing issues with CSS rules, dynamic changes, and stuck loading states
 */

export default class PageManager {
  constructor() {
    this.observers = new Map();
    this.cleanupQueue = new Set();
    this.loadingQueue = new Set();
    this.isProcessing = false;
    this.isLoadingManagementActive = false;
    this.loadingTimeout = null;
    this.pageTransitionStart = null;
    this.isInitialLoad = true; // Track if this is the first page load
    this.initialLoadComplete = false;
  }

  /**
   * Main cleanup function that hides unwanted toolbar elements
   */
  cleanup() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    try {
      // Hide elements by specific attributes (most reliable)
      this.hideByAttributes();
      
      // Hide elements by nth-child selectors (fallback)
      this.hideByPosition();
      
      // Hide upload buttons
      this.hideUploadButtons();
      
      // Hide rich text toggle
      this.hideRichTextToggle();
      
    } catch (error) {
      console.warn('PageManager: Error during cleanup:', error);
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Manage loading states during page transitions
   */
  manageLoadingState() {
    if (this.isLoadingManagementActive) return;
    this.isLoadingManagementActive = true;

    try {
      // Only clear stuck loading indicators, not active ones
      this.clearOnlyStuckLoading();
      
      // Ensure content visibility for completed pages
      this.ensureCompletedContentVisibility();
      
    } catch (error) {
      console.warn('PageManager: Error during loading management:', error);
    } finally {
      this.isLoadingManagementActive = false;
    }
  }

  /**
   * Clear only truly stuck loading indicators (more selective)
   */
  clearOnlyStuckLoading() {
    const loadingSelectors = [
      '.LoadingIndicator',
      '.Loading',
      '.loading',
      '.App-loading'
    ];

    loadingSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        // Only hide if truly stuck (been visible for more than 15 seconds)
        const isStuck = this.isLoadingStuck(el);
        if (isStuck) {
          console.warn('PageManager: Found stuck loading indicator, hiding:', el);
          this.forceHideLoading(el);
        }
      });
    });
  }

  /**
   * Check if a loading indicator appears to be stuck (more lenient)
   */
  isLoadingStuck(element) {
    if (!element) return false;
    
    // Never interfere with loading during initial page load
    if (this.isInitialLoad && !this.initialLoadComplete) {
      return false;
    }
    
    // Don't interfere with loading indicators that are actively animating
    const isAnimating = element.classList.contains('fa-spin') || 
                       element.classList.contains('animate-spin') ||
                       element.classList.contains('fa-spinner') ||
                       element.classList.contains('spinner') ||
                       window.getComputedStyle(element).animationName !== 'none';
    
    if (isAnimating) {
      // For animating elements, use longer threshold
      const visibleTime = element.dataset.vietvanVisibleSince;
      if (!visibleTime) {
        element.dataset.vietvanVisibleSince = Date.now();
        return false;
      }
      
      const timeDiff = Date.now() - parseInt(visibleTime);
      return timeDiff > 20000; // 20 seconds for animating elements (increased)
    }
    
    // For non-animating elements, check if they appear broken
    const visibleTime = element.dataset.vietvanVisibleSince;
    if (!visibleTime) {
      element.dataset.vietvanVisibleSince = Date.now();
      return false;
    }
    
    const timeDiff = Date.now() - parseInt(visibleTime);
    return timeDiff > 12000; // 12 seconds for non-animating elements (increased)
  }

  /**
   * Ensure content visibility only for pages that should be loaded
   */
  ensureCompletedContentVisibility() {
    // Only ensure visibility if page is truly loaded and no active loading indicators
    const hasActiveLoading = document.querySelector('.LoadingIndicator:not([data-vietvan-force-hidden="true"]), .Loading:not([data-vietvan-force-hidden="true"])');
    
    if (!hasActiveLoading && document.readyState === 'complete') {
      const contentSelectors = [
        '.App-content',
        '.DiscussionPage-content',
        '.IndexPage-content'
      ];

      contentSelectors.forEach(selector => {
        const content = document.querySelector(selector);
        if (content && this.isContentHidden(content)) {
          console.log('PageManager: Ensuring content visibility for:', selector);
          this.ensureElementVisible(content);
        }
      });
    }
  }

  /**
   * Force hide stuck loading indicator
   */
  forceHideLoading(element) {
    if (!element) return;
    
    console.warn('PageManager: Force hiding stuck loading element:', element);
    
    element.style.setProperty('display', 'none', 'important');
    element.style.setProperty('visibility', 'hidden', 'important');
    element.style.setProperty('opacity', '0', 'important');
    element.classList.add('vietvan-force-hidden');
    element.setAttribute('aria-hidden', 'true');
    
    // Mark as force hidden
    element.dataset.vietvanForceHidden = 'true';
  }

  /**
   * Ensure page content is visible after loading
   */
  ensureContentVisibility() {
    const contentSelectors = [
      '.App-content',
      '.DiscussionPage-content',
      '.IndexPage-content',
      '.UserPage-content',
      '.PostsUserPage-content'
    ];

    contentSelectors.forEach(selector => {
      const content = document.querySelector(selector);
      if (content && this.isContentHidden(content)) {
        this.ensureElementVisible(content);
      }
    });
  }

  /**
   * Check if content appears to be hidden when it should be visible (updated)
   */
  isContentHidden(element) {
    if (!element) return false;
    
    const styles = window.getComputedStyle(element);
    const isHidden = styles.display === 'none' || 
                    styles.visibility === 'hidden' || 
                    styles.opacity === '0';
    
    // Content should be visible if page has finished loading AND no active loading indicators
    const hasActiveLoading = document.querySelector('.LoadingIndicator:not([data-vietvan-force-hidden="true"]), .Loading:not([data-vietvan-force-hidden="true"])');
    const pageLoaded = document.readyState === 'complete' && !hasActiveLoading;
    
    return isHidden && pageLoaded;
  }

  /**
   * Ensure an element is visible
   */
  ensureElementVisible(element) {
    if (!element) return;
    
    element.style.removeProperty('display');
    element.style.removeProperty('visibility');
    element.style.removeProperty('opacity');
    element.classList.remove('vietvan-force-hidden');
    element.removeAttribute('aria-hidden');
  }

  /**
   * Handle loading timeout scenarios (more conservative)
   */
  handleLoadingTimeout() {
    // Clear any existing timeout
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }

    // Only set timeout if there are actually loading indicators visible
    const activeLoadingElements = document.querySelectorAll('.LoadingIndicator:not([data-vietvan-force-hidden="true"]), .Loading:not([data-vietvan-force-hidden="true"])');
    
    if (activeLoadingElements.length > 0) {
      this.loadingTimeout = setTimeout(() => {
        console.warn('PageManager: Loading timeout reached, checking for stuck indicators');
        this.clearOnlyStuckLoading();
      }, 20000); // Increased to 20 seconds to be less aggressive
    }
  }

  /**
   * Force complete loading state (updated to be more selective)
   */
  forceCompleteLoading() {
    // Only hide loading indicators that are truly stuck
    const potentiallyStuckElements = document.querySelectorAll('.LoadingIndicator, .Loading, .loading');
    potentiallyStuckElements.forEach(el => {
      if (this.isLoadingStuck(el)) {
        this.forceHideLoading(el);
      }
    });

    // Show main content only if no active loading
    const hasActiveLoading = document.querySelector('.LoadingIndicator:not([data-vietvan-force-hidden="true"]), .Loading:not([data-vietvan-force-hidden="true"])');
    if (!hasActiveLoading) {
      this.ensureCompletedContentVisibility();
    }

    // Dispatch custom event to signal forced completion
    window.dispatchEvent(new CustomEvent('vietvan:loading-forced-complete'));
  }

  /**
   * Hide elements by data attributes and title attributes
   */
  hideByAttributes() {
    const attributeSelectors = [
      'button[data-hotkey="Ctrl+K"]',
      'button[title*="Link"]',
      'div[data-tooltip*="Link"]',
      'button[data-hotkey="Ctrl+>"]', 
      'button[title*="Quote"]',
      'div[data-tooltip*="Quote"]',
      'button[data-hotkey="Ctrl+`"]',
      'button[title*="Code"]',
      'div[data-tooltip*="Code"]'
    ];

    const toolbar = document.querySelector('.TextEditor-toolbar');
    if (toolbar) {
      attributeSelectors.forEach(selector => {
        const elements = toolbar.querySelectorAll(selector);
        elements.forEach(el => this.hideElement(el));
      });
    }
  }

  /**
   * Hide elements by nth-child position (fallback method)
   */
  hideByPosition() {
    const positionSelectors = [
      '.TextEditor-toolbar > div > button:nth-child(4)',
      '.TextEditor-toolbar > div > button:nth-child(5)',
      '.TextEditor-toolbar > div > div:nth-child(1)',
      '.TextEditor-toolbar > div > div:nth-child(6)',
      '.TextEditor-toolbar > div > div:nth-child(7)',
      '.TextEditor-toolbar > div > div:nth-child(10)'
    ];

    positionSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => this.hideElement(el));
    });
  }

  /**
   * Hide upload buttons
   */
  hideUploadButtons() {
    const uploadSelectors = [
      '.item-fof-upload',
      'li.item-fof-upload',
      '.Button--icon[title*="upload" i]',
      '.Button--icon[title*="file" i]'
    ];

    uploadSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => this.hideElement(el));
    });
  }

  /**
   * Hide rich text toggle button
   */
  hideRichTextToggle() {
    const elements = document.querySelectorAll('.item-rich-text');
    elements.forEach(el => this.hideElement(el));
  }

  /**
   * Hide an element completely
   * @param {Element} element 
   */
  hideElement(element) {
    if (!element || element.dataset.vietvanHidden) return;

    // Mark as hidden to prevent repeated processing
    element.dataset.vietvanHidden = 'true';
    
    // Apply multiple hiding methods for maximum effectiveness
    element.style.setProperty('display', 'none', 'important');
    element.style.setProperty('visibility', 'hidden', 'important');
    element.style.setProperty('opacity', '0', 'important');
    element.style.setProperty('pointer-events', 'none', 'important');
    element.style.setProperty('height', '0', 'important');
    element.style.setProperty('width', '0', 'important');
    element.style.setProperty('overflow', 'hidden', 'important');
    element.style.setProperty('margin', '0', 'important');
    element.style.setProperty('padding', '0', 'important');
    
    // Add hidden class
    element.classList.add('vietvan-hidden');
    element.setAttribute('aria-hidden', 'true');
    element.setAttribute('hidden', '');
  }

  /**
   * Start observing for toolbar and loading changes
   */
  startObserving() {
    // Observe composer area for toolbar creation/updates
    const observeComposer = () => {
      const composer = document.querySelector('#composer');
      if (composer && !this.observers.has('composer')) {
        const observer = new MutationObserver((mutations) => {
          let needsCleanup = false;
          
          mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
              // Check for toolbar-related additions
              mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (node.matches?.('.TextEditor-toolbar') || 
                      node.querySelector?.('.TextEditor-toolbar')) {
                    needsCleanup = true;
                  }
                }
              });
            } else if (mutation.type === 'attributes') {
              // Check for style/class changes that might affect toolbar
              if (mutation.target.matches?.('.TextEditor-toolbar *')) {
                needsCleanup = true;
              }
            }
          });

          if (needsCleanup) {
            this.scheduleCleanup();
          }
        });

        observer.observe(composer, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class', 'data-hotkey', 'title']
        });

        this.observers.set('composer', observer);
      }
    };

    // Observe body for new composer instances and loading states
    const observeBody = () => {
      if (!this.observers.has('body')) {
        const observer = new MutationObserver((mutations) => {
          let needsCleanup = false;
          let needsLoadingManagement = false;

          mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
              mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  // Check for composer
                  if (node.matches?.('#composer') || 
                      node.querySelector?.('#composer')) {
                    setTimeout(observeComposer, 50);
                    needsCleanup = true;
                  }
                  
                  // Only manage loading for stuck indicators, not active ones
                  if (node.matches?.('.LoadingIndicator, .Loading, .loading') ||
                      node.querySelector?.('.LoadingIndicator, .Loading, .loading')) {
                    // Don't interfere with initial page load
                    if (this.isInitialLoad && !this.initialLoadComplete) {
                      return;
                    }
                    // Delay to allow normal loading to complete first
                    setTimeout(() => {
                      needsLoadingManagement = true;
                      this.scheduleLoadingManagement();
                    }, 5000); // Increased delay for better loading experience
                  }
                }
              });

              // Check for removed loading indicators (less aggressive monitoring)
              mutation.removedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (node.matches?.('.LoadingIndicator, .Loading, .loading')) {
                    // Loading removed naturally, ensure content is visible
                    setTimeout(() => {
                      this.ensureCompletedContentVisibility();
                    }, 100);
                  }
                }
              });
            }
          });

          if (needsCleanup) {
            this.scheduleCleanup();
          }
          // Note: loadingManagement is now scheduled with delay above
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: false // Reduced monitoring to be less intrusive
        });

        this.observers.set('body', observer);
      }
    };

    observeComposer();
    observeBody();
  }

  /**
   * Schedule cleanup with debouncing
   */
  scheduleCleanup() {
    this.cleanupQueue.add(Date.now());
    
    setTimeout(() => {
      if (this.cleanupQueue.size > 0) {
        this.cleanupQueue.clear();
        this.cleanup();
      }
    }, 50);
  }

  /**
   * Schedule loading management with debouncing (more conservative)
   */
  scheduleLoadingManagement() {
    this.loadingQueue.add(Date.now());
    
    setTimeout(() => {
      if (this.loadingQueue.size > 0) {
        this.loadingQueue.clear();
        // Only check for stuck loading, don't interfere with active loading
        this.clearOnlyStuckLoading();
      }
    }, 2000); // Increased delay to allow normal loading to complete
  }

  /**
   * Stop all observers
   */
  stopObserving() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  /**
   * Initialize the page management system (updated for better loading handling)
   */
  initialize() {
    // Don't do any cleanup on initial startup to allow loading to show
    // Initial cleanup only after page is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          this.cleanup();
          this.markInitialLoadComplete();
        }, 1000); // Allow initial loading to show first
      });
    } else {
      setTimeout(() => {
        this.cleanup();
        this.markInitialLoadComplete();
      }, 500);
    }
    
    // Start observing for changes (but delay to allow initial loading)
    setTimeout(() => {
      this.startObserving();
    }, 2000);
    
    // Handle route changes (be gentle with loading management)
    if (window.app?.history?.router) {
      window.app.history.router.on('changed', () => {
        this.pageTransitionStart = Date.now();
        this.isInitialLoad = false; // No longer initial load after first route change
        setTimeout(() => {
          this.cleanup();
          // Only check for stuck loading after route changes, with longer delay
          setTimeout(() => this.clearOnlyStuckLoading(), 5000);
        }, 200);
      });
    }

    // Listen for page visibility changes (reduced interference)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        setTimeout(() => {
          this.cleanup();
          // Only check stuck loading when returning to tab (if not initial load)
          if (!this.isInitialLoad) {
            setTimeout(() => this.clearOnlyStuckLoading(), 2000);
          }
        }, 100);
      }
    });

    // Handle page load completion (mark initial load as complete)
    if (document.readyState === 'complete') {
      setTimeout(() => {
        this.markInitialLoadComplete();
        this.ensureCompletedContentVisibility();
      }, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.markInitialLoadComplete();
          this.ensureCompletedContentVisibility();
        }, 1000);
      });
    }

    // Periodic cleanup as fallback (much less frequent loading checks)
    setInterval(() => {
      if (document.querySelector('.TextEditor-toolbar')) {
        this.cleanup();
      }
    }, 30000);

    // Only check for stuck loading states every 3 minutes (much less aggressive)
    setInterval(() => {
      if (!this.isInitialLoad) { // Don't interfere with initial load
        this.clearOnlyStuckLoading();
      }
    }, 180000);
  }

  /**
   * Mark initial load as complete
   */
  markInitialLoadComplete() {
    this.initialLoadComplete = true;
    setTimeout(() => {
      this.isInitialLoad = false;
    }, 3000); // Give extra time for initial load processes
  }
}