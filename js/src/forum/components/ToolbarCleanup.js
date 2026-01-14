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
      // Clear any stuck loading indicators
      this.clearStuckLoading();
      
      // Ensure page content is properly displayed
      this.ensureContentVisibility();
      
      // Handle loading timeouts
      this.handleLoadingTimeout();
      
    } catch (error) {
      console.warn('PageManager: Error during loading management:', error);
    } finally {
      this.isLoadingManagementActive = false;
    }
  }

  /**
   * Clear stuck loading indicators
   */
  clearStuckLoading() {
    const loadingSelectors = [
      '.LoadingIndicator',
      '.Loading',
      '.loading',
      '.spinner',
      '.App-loading',
      '.ModalManager .Modal .Loading',
      '.DiscussionList-loadMore .Button.loading',
      '[aria-label="Loading"]',
      '.fa-spinner',
      '.fa-circle-o-notch'
    ];

    loadingSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        // Only remove loading indicators that have been visible for too long
        const isStuck = this.isLoadingStuck(el);
        if (isStuck) {
          this.forceHideLoading(el);
        }
      });
    });
  }

  /**
   * Check if a loading indicator appears to be stuck
   */
  isLoadingStuck(element) {
    if (!element) return false;
    
    // Check if element has been visible for more than 5 seconds
    const visibleTime = element.dataset.vietvanVisibleSince;
    if (!visibleTime) {
      element.dataset.vietvanVisibleSince = Date.now();
      return false;
    }
    
    const timeDiff = Date.now() - parseInt(visibleTime);
    return timeDiff > 5000; // 5 seconds threshold
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
   * Check if content appears to be hidden when it should be visible
   */
  isContentHidden(element) {
    if (!element) return false;
    
    const styles = window.getComputedStyle(element);
    const isHidden = styles.display === 'none' || 
                    styles.visibility === 'hidden' || 
                    styles.opacity === '0';
    
    // Content should be visible if page has finished loading
    const pageLoaded = document.readyState === 'complete' && 
                      !document.querySelector('.App-loading') &&
                      !document.querySelector('.LoadingIndicator');
    
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
   * Handle loading timeout scenarios
   */
  handleLoadingTimeout() {
    // Clear any existing timeout
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout);
    }

    // Set a maximum loading time
    this.loadingTimeout = setTimeout(() => {
      console.warn('PageManager: Loading timeout reached, forcing page display');
      this.forceCompleteLoading();
    }, 10000); // 10 second maximum loading time
  }

  /**
   * Force complete loading state
   */
  forceCompleteLoading() {
    // Hide all loading indicators
    const loadingElements = document.querySelectorAll('.LoadingIndicator, .Loading, .loading, .spinner');
    loadingElements.forEach(el => this.forceHideLoading(el));

    // Show main content
    this.ensureContentVisibility();

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
                  
                  // Check for loading indicators
                  if (node.matches?.('.LoadingIndicator, .Loading, .loading') ||
                      node.querySelector?.('.LoadingIndicator, .Loading, .loading')) {
                    needsLoadingManagement = true;
                  }

                  // Check for page content changes
                  if (node.matches?.('.App-content, .DiscussionPage, .IndexPage') ||
                      node.querySelector?.('.App-content, .DiscussionPage, .IndexPage')) {
                    needsLoadingManagement = true;
                  }
                }
              });

              // Check for removed loading indicators
              mutation.removedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (node.matches?.('.LoadingIndicator, .Loading, .loading') ||
                      node.querySelector?.('.LoadingIndicator, .Loading, .loading')) {
                    needsLoadingManagement = true;
                  }
                }
              });
            } else if (mutation.type === 'attributes') {
              // Check for loading-related attribute changes
              if (mutation.target.matches?.('.LoadingIndicator, .Loading, .loading, .App-content')) {
                needsLoadingManagement = true;
              }
            }
          });

          if (needsCleanup) {
            this.scheduleCleanup();
          }
          if (needsLoadingManagement) {
            this.scheduleLoadingManagement();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class', 'aria-hidden']
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
   * Schedule loading management with debouncing
   */
  scheduleLoadingManagement() {
    this.loadingQueue.add(Date.now());
    
    setTimeout(() => {
      if (this.loadingQueue.size > 0) {
        this.loadingQueue.clear();
        this.manageLoadingState();
      }
    }, 100);
  }

  /**
   * Stop all observers
   */
  stopObserving() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  /**
   * Initialize the page management system
   */
  initialize() {
    // Initial cleanup and loading management
    setTimeout(() => {
      this.cleanup();
      this.manageLoadingState();
    }, 100);
    
    // Start observing for changes
    this.startObserving();
    
    // Handle route changes
    if (window.app?.history?.router) {
      window.app.history.router.on('changed', () => {
        this.pageTransitionStart = Date.now();
        setTimeout(() => {
          this.cleanup();
          this.manageLoadingState();
        }, 200);
      });
    }

    // Listen for page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        setTimeout(() => {
          this.cleanup();
          this.manageLoadingState();
        }, 100);
      }
    });

    // Listen for window focus events
    window.addEventListener('focus', () => {
      setTimeout(() => {
        this.cleanup();
        this.manageLoadingState();
      }, 100);
    });

    // Handle page load completion
    if (document.readyState === 'complete') {
      setTimeout(() => this.manageLoadingState(), 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => this.manageLoadingState(), 500);
      });
    }

    // Periodic cleanup as fallback
    setInterval(() => {
      if (document.querySelector('.TextEditor-toolbar')) {
        this.cleanup();
      }
      // Check for stuck loading states every 30 seconds
      this.manageLoadingState();
    }, 30000);

    // More frequent loading checks in the first few minutes
    setTimeout(() => {
      const frequentCheck = setInterval(() => {
        this.manageLoadingState();
      }, 5000);
      
      // Stop frequent checking after 2 minutes
      setTimeout(() => clearInterval(frequentCheck), 120000);
    }, 1000);
  }
}