import app from 'flarum/forum/app';
import CustomMobileCreateModal from './CustomMobileCreateModal';

/**
 * Custom Mobile Composer Controller
 * Intercepts create topic clicks on mobile and shows custom modal
 */
export default class CustomMobileComposer {
  static init() {
    // Intercept create topic button clicks on mobile
    this.interceptCreateTopicButtons();

    // Mount the modal component
    setTimeout(() => {
      this.mountModal();
    }, 1000);
  }

  static interceptCreateTopicButtons() {
    // Use event delegation to catch all create topic button clicks
    document.addEventListener('click', (e) => {
      // Only on mobile
      if (window.innerWidth > 768) return;

      // More aggressive button detection
      const target = e.target.closest('button, a, .Button');
      
      if (!target) return;

      // Check various ways to identify create topic buttons
      const buttonSelectors = [
        '.CustomMobileDiscussionToolbar-button',
        '.item-newDiscussion',
        '.IndexPage-newDiscussion', 
        '.Button--primary[aria-label*="Start"]',
        '[title*="discussion"]',
        '[data-original-title*="discussion"]'
      ];

      const isCreateButton = buttonSelectors.some(selector => target.matches(selector)) ||
                             target.querySelector('.fa-edit, .fa-plus, .fa-pen') ||
                             target.textContent.includes('Start') ||
                             target.textContent.includes('discussion') ||
                             target.textContent.includes('Tạo') ||
                             target.textContent.includes('Viết') ||
                             target.getAttribute('aria-label')?.includes('Start') ||
                             target.getAttribute('aria-label')?.includes('discussion');
      
      if (isCreateButton) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Also prevent default composer from opening
        setTimeout(() => {
          const composer = document.querySelector('#composer');
          if (composer) {
            composer.remove();
          }
        }, 50);
        
        console.log('Intercepted create topic click on mobile');
        CustomMobileCreateModal.show();
        return false;
      }
    }, true); // Use capture phase for earlier interception

    // Also hide any composer that appears on mobile
    const observer = new MutationObserver((mutations) => {
      if (window.innerWidth <= 768) {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.id === 'composer' || node.querySelector('#composer')) {
                console.log('Hiding default composer on mobile');
                const composer = node.id === 'composer' ? node : node.querySelector('#composer');
                composer.style.display = 'none';
              }
            }
          });
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.log('Create topic button interception initialized with aggressive blocking');
  }

  static mountModal() {
    if (window.innerWidth <= 768 && !document.querySelector('#mobile-create-modal-container')) {
      const container = document.createElement('div');
      container.id = 'mobile-create-modal-container';
      document.body.appendChild(container);
      m.mount(container, CustomMobileCreateModal);
      console.log('Mobile create modal mounted');
    }
  }
}