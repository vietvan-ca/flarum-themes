import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

/**
 * Custom Mobile Composer Controller
 * Handles repositioning of composer buttons for mobile layout
 */
export default class CustomMobileComposer {
  static init() {
    // Use MutationObserver to detect composer changes
    this.observeComposer();

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          this.setupMobileLayout();
        }, 100);
      } else {
        this.removeMobileLayout();
      }
    });

    // Check periodically for composer
    this.checkComposerInterval = setInterval(() => {
      if (window.innerWidth <= 768 && document.querySelector('#composer') && !document.querySelector('.CustomMobileComposer-submitBtn')) {
        this.setupMobileLayout();
      }
    }, 1000);
  }

  static observeComposer() {
    // Watch for composer being added/removed from DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id === 'composer' || node.querySelector('#composer')) {
              if (window.innerWidth <= 768) {
                setTimeout(() => this.setupMobileLayout(), 200);
              }
            }
          }
        });

        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id === 'composer' || node.querySelector('#composer')) {
              this.removeMobileLayout();
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  static setupMobileLayout() {
    const composer = document.querySelector('#composer');
    if (!composer) return;

    // Remove any existing custom elements
    this.removeMobileLayout();

    // Find the original submit button
    const originalSubmitBtn = composer.querySelector('.item-submit button, .App-primaryControl button');
    if (!originalSubmitBtn) return;

    // Create custom bottom submit button
    const customSubmitBtn = document.createElement('button');
    customSubmitBtn.className = 'CustomMobileComposer-submitBtn';
    customSubmitBtn.textContent = 'Đăng';
    customSubmitBtn.type = 'button';
    
    // Copy click handler from original button
    customSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Trigger click on original submit button
      originalSubmitBtn.click();
    });

    // Style the custom button
    customSubmitBtn.style.cssText = `
      position: fixed !important;
      bottom: 10px !important;
      left: 15px !important;
      right: 15px !important;
      background: var(--primary-color, #C22126) !important;
      color: white !important;
      border: none !important;
      border-radius: 8px !important;
      padding: 12px 20px !important;
      font-size: 16px !important;
      font-weight: bold !important;
      text-align: center !important;
      cursor: pointer !important;
      z-index: 1051 !important;
      box-shadow: 0 2px 8px rgba(194, 33, 38, 0.3) !important;
      transition: all 0.2s ease !important;
      line-height: 1.2 !important;
      display: block !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none !important;
      -webkit-tap-highlight-color: transparent !important;
      touch-action: manipulation !important;
    `;

    // Add hover/active effects
    customSubmitBtn.addEventListener('mousedown', () => {
      customSubmitBtn.style.transform = 'translateY(1px)';
      customSubmitBtn.style.boxShadow = '0 1px 4px rgba(194, 33, 38, 0.3)';
    });

    customSubmitBtn.addEventListener('mouseup', () => {
      customSubmitBtn.style.transform = '';
      customSubmitBtn.style.boxShadow = '0 2px 8px rgba(194, 33, 38, 0.3)';
    });

    customSubmitBtn.addEventListener('mouseleave', () => {
      customSubmitBtn.style.transform = '';
      customSubmitBtn.style.boxShadow = '0 2px 8px rgba(194, 33, 38, 0.3)';
    });

    // Add the custom button to the page
    document.body.appendChild(customSubmitBtn);

    // Create bottom spacing element
    const bottomSpacer = document.createElement('div');
    bottomSpacer.className = 'CustomMobileComposer-spacer';
    bottomSpacer.style.cssText = `
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      height: 70px !important;
      background: #fff !important;
      border-top: 1px solid var(--control-bg, #e8e8e8) !important;
      z-index: 1050 !important;
      pointer-events: none !important;
    `;

    // Handle dark mode
    if (document.body.classList.contains('dark')) {
      bottomSpacer.style.background = '#2d2d2d !important';
      bottomSpacer.style.borderTop = '1px solid #404040 !important';
    }

    document.body.appendChild(bottomSpacer);

    // Hide original submit button
    const submitContainer = originalSubmitBtn.closest('.item-submit, .App-primaryControl');
    if (submitContainer) {
      submitContainer.style.display = 'none';
    }

    // Add padding to composer content to avoid overlap
    const composerContent = composer.querySelector('.ComposerBody-content, .Composer-content');
    if (composerContent) {
      composerContent.style.paddingBottom = '80px';
    }

    console.log('Mobile composer layout setup complete');
  }

  static removeMobileLayout() {
    // Remove custom elements
    const customBtn = document.querySelector('.CustomMobileComposer-submitBtn');
    const customSpacer = document.querySelector('.CustomMobileComposer-spacer');
    
    if (customBtn) customBtn.remove();
    if (customSpacer) customSpacer.remove();

    // Restore original submit button visibility
    const composer = document.querySelector('#composer');
    if (composer) {
      const originalSubmitBtn = composer.querySelector('.item-submit, .App-primaryControl');
      if (originalSubmitBtn) {
        originalSubmitBtn.style.display = '';
      }

      // Remove custom padding
      const composerContent = composer.querySelector('.ComposerBody-content, .Composer-content');
      if (composerContent) {
        composerContent.style.paddingBottom = '';
      }
    }

    console.log('Mobile composer layout removed');
  }

  static cleanup() {
    // Clean up interval
    if (this.checkComposerInterval) {
      clearInterval(this.checkComposerInterval);
      this.checkComposerInterval = null;
    }
    
    // Remove mobile layout
    this.removeMobileLayout();
  }
}