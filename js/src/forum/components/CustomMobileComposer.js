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

    // Remove any existing custom elements
    this.removeMobileLayout();

    // Find the original submit button (fa-paper-plane)
    const originalSubmitBtn = composer.querySelector('.item-submit button, .App-primaryControl button');
    if (!originalSubmitBtn) return;

    // Mark as mobile customized to avoid multiple setups
    if (originalSubmitBtn.classList.contains('mobile-customized')) return;
    originalSubmitBtn.classList.add('mobile-customized');

    // Replace the button text and icon
    const buttonLabel = originalSubmitBtn.querySelector('.Button-label');
    const buttonIcon = originalSubmitBtn.querySelector('.Button-icon');
    
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
    }
    if (buttonIcon) {
      buttonIcon.style.display = 'none'; // Hide the paper-plane icon
    }

    // Apply mobile styling to the existing button
    originalSubmitBtn.style.cssText = `
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
      width: calc(100% - 30px) !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none !important;
      -webkit-tap-highlight-color: transparent !important;
      touch-action: manipulation !important;
    `;

    // Hide the original submit button container but keep button visible
    const submitContainer = originalSubmitBtn.closest('.item-submit, .App-primaryControl');
    if (submitContainer) {
      submitContainer.style.position = 'fixed';
      submitContainer.style.bottom = '0';
      submitContainer.style.left = '0';
      submitContainer.style.right = '0';
      submitContainer.style.zIndex = '1051';
      submitContainer.style.background = 'transparent';
      submitContainer.style.padding = '0';
      submitContainer.style.margin = '0';
    }

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
    }

    // Add padding to composer content to avoid overlap
    const composerContent = composer.querySelector('.ComposerBody-content, .Composer-content');
    if (composerContent) {
      composerContent.style.paddingBottom = '80px';
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