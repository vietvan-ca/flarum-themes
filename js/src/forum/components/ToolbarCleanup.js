/**
 * PageManager - Handles toolbar cleanup and loading state management
 * Addresses timing issues with CSS rules, dynamic changes, and stuck loading states
 */

export default class PageManager {
  constructor() {
    this.observers = new Map();
    this.isProcessing = false;
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
      
      // Hide rich text toggle
      this.hideRichTextToggle();
    } catch (error) {
      console.warn('PageManager: Error during cleanup:', error);
    } finally {
      this.isProcessing = false;
    }
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
            setTimeout(() => this.cleanup(), 50);
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

    // Observe body for new composer instances
    const observeBody = () => {
      if (!this.observers.has('body')) {
        const observer = new MutationObserver((mutations) => {
          let needsCleanup = false;

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
                }
              });
            }
          });

          if (needsCleanup) {
            setTimeout(() => this.cleanup(), 100);
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        this.observers.set('body', observer);
      }
    };

    observeComposer();
    observeBody();
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
    // Initial cleanup
    this.cleanup();
    
    // Start observing for changes
    this.startObserving();
    
    // Periodic cleanup as fallback
    setInterval(() => {
      if (document.querySelector('.TextEditor-toolbar')) {
        this.cleanup();
      }
    }, 30000);
  }
}