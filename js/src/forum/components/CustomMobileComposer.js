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
      if (window.innerWidth <= 768) {
        const composer = document.querySelector('#composer');
        const submitBtn = composer?.querySelector('.item-submit button, .App-primaryControl button');
        if (composer && submitBtn && !submitBtn.classList.contains('mobile-customized')) {
          this.setupMobileLayout();
        }
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

    console.log('Setting up mobile layout for composer');

    // Remove any existing custom elements
    this.removeMobileLayout();

    // Find the original submit button with multiple selectors
    let originalSubmitBtn = composer.querySelector('.item-submit button') || 
                           composer.querySelector('.App-primaryControl button') ||
                           composer.querySelector('button[type="submit"]') ||
                           composer.querySelector('.Button--primary');

    console.log('Found submit button:', originalSubmitBtn);
    
    if (!originalSubmitBtn) {
      console.log('No submit button found, retrying...');
      return;
    }

    // Mark as mobile customized to avoid multiple setups
    if (originalSubmitBtn.classList.contains('mobile-customized')) {
      console.log('Button already customized');
      return;
    }
    originalSubmitBtn.classList.add('mobile-customized');

    // Move the entire submit button container and mark it as well
    const submitContainer = originalSubmitBtn.closest('.item-submit') || 
                           originalSubmitBtn.closest('.App-primaryControl') ||
                           originalSubmitBtn.parentElement;
    
    console.log('Submit container:', submitContainer);
    
    if (submitContainer) {
      submitContainer.classList.add('mobile-customized');
      submitContainer.style.cssText = `
        position: fixed !important;
        bottom: 0px !important;
        left: 0px !important;
        right: 0px !important;
        z-index: 1051 !important;
        background: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        height: auto !important;
        display: block !important;
      `;
      console.log('Applied container styles');
    }

    // Replace the button text and icon
    const buttonLabel = originalSubmitBtn.querySelector('.Button-label');
    const buttonIcon = originalSubmitBtn.querySelector('.Button-icon');
    
    console.log('Button label:', buttonLabel);
    console.log('Button icon:', buttonIcon);
    
    // Store original content for restoration
    if (!originalSubmitBtn.dataset.originalLabel && buttonLabel) {
      originalSubmitBtn.dataset.originalLabel = buttonLabel.textContent;
    }
    if (!originalSubmitBtn.dataset.originalIcon && buttonIcon) {
      originalSubmitBtn.dataset.originalIcon = buttonIcon.className;
    }

    // Update button content
    if (buttonLabel) {
      buttonLabel.textContent = 'Đăng';
      console.log('Updated button text to: Đăng');
    }
    if (buttonIcon) {
      buttonIcon.style.display = 'none'; // Hide the paper-plane icon
      console.log('Hidden button icon');
    }

    // Apply mobile styling to the existing button - use important to override
    const buttonStyles = `
      position: fixed !important;
      bottom: 10px !important;
      left: 15px !important;
      right: 15px !important;
      width: calc(100% - 30px) !important;
      background: #C22126 !important;
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
      opacity: 1 !important;
      visibility: visible !important;
      transform: none !important;
      margin: 0 !important;
      min-height: auto !important;
      max-height: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none !important;
      -webkit-tap-highlight-color: transparent !important;
      touch-action: manipulation !important;
    `;
    
    originalSubmitBtn.style.cssText = buttonStyles;
    console.log('Applied button styles');

    // Also try to override with attribute
    originalSubmitBtn.setAttribute('style', buttonStyles);

    // Create bottom spacing element
    if (!document.querySelector('.CustomMobileComposer-spacer')) {
      const bottomSpacer = document.createElement('div');
      bottomSpacer.className = 'CustomMobileComposer-spacer';
      bottomSpacer.style.cssText = `
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        height: 70px !important;
        background: #fff !important;
        border-top: 1px solid #e8e8e8 !important;
        z-index: 1050 !important;
        pointer-events: none !important;
      `;

      // Handle dark mode
      if (document.body.classList.contains('dark')) {
        bottomSpacer.style.background = '#2d2d2d !important';
        bottomSpacer.style.borderTop = '1px solid #404040 !important';
      }

      document.body.appendChild(bottomSpacer);
      console.log('Added bottom spacer');
    }

    // Add padding to composer content to avoid overlap
    const composerContent = composer.querySelector('.ComposerBody-content') || 
                           composer.querySelector('.Composer-content');
    if (composerContent) {
      composerContent.style.paddingBottom = '80px';
      console.log('Added content padding');
    }

    console.log('Mobile composer layout setup complete - button replaced');
  }

  static removeMobileLayout() {
    // Remove only the custom spacing element
    const customSpacer = document.querySelector('.CustomMobileComposer-spacer');
    if (customSpacer) customSpacer.remove();

    // Restore original submit button appearance and position
    const composer = document.querySelector('#composer');
    if (composer) {
      const submitBtn = composer.querySelector('.item-submit button, .App-primaryControl button');
      const submitContainer = composer.querySelector('.item-submit, .App-primaryControl');
      
      if (submitBtn && submitBtn.classList.contains('mobile-customized')) {
        // Restore original button content
        const buttonLabel = submitBtn.querySelector('.Button-label');
        const buttonIcon = submitBtn.querySelector('.Button-icon');
        
        if (buttonLabel && submitBtn.dataset.originalLabel) {
          buttonLabel.textContent = submitBtn.dataset.originalLabel;
        }
        if (buttonIcon) {
          buttonIcon.style.display = ''; // Show the paper-plane icon again
          if (submitBtn.dataset.originalIcon) {
            buttonIcon.className = submitBtn.dataset.originalIcon;
          }
        }

        // Reset button styling
        submitBtn.style.cssText = '';
        submitBtn.classList.remove('mobile-customized');
        
        // Clear stored original values
        delete submitBtn.dataset.originalLabel;
        delete submitBtn.dataset.originalIcon;
      }

      if (submitContainer) {
        // Reset container styling
        submitContainer.style.cssText = '';
        submitContainer.classList.remove('mobile-customized');
      }

      // Remove custom padding
      const composerContent = composer.querySelector('.ComposerBody-content, .Composer-content');
      if (composerContent) {
        composerContent.style.paddingBottom = '';
      }
    }

    console.log('Mobile composer layout removed - button restored');
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