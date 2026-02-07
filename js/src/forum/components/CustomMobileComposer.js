import app from 'flarum/forum/app';
import CustomMobileCreateModal from './CustomMobileCreateModal';

/**
 * Custom Mobile Composer Controller
 * Intercepts create topic clicks on mobile and shows custom modal
 */
export default class CustomMobileComposer {
  static init() {
    // Intercept create topic and reply button clicks on mobile
    this.interceptCreateTopicButtons();
    
    // No need to pre-mount modal, it will mount when needed with correct state
  }

  static interceptCreateTopicButtons() {
    // Use event delegation to catch all create topic and reply button clicks
    document.addEventListener('click', (e) => {
      // Only on mobile
      if (window.innerWidth > 768) return;

      // More aggressive button detection
      const target = e.target.closest('button, a, .Button');
      
      if (!target) return;

      // Check for create topic buttons
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
      
      // Check for reply buttons
      const replySelectors = [
        '.item-reply',
        '.Button--reply',
        '[title*="reply"]',
        '[title*="Reply"]',
        '[data-original-title*="reply"]',
        '[data-original-title*="Reply"]'
      ];

      const isReplyButton = replySelectors.some(selector => target.matches(selector)) ||
                            target.querySelector('.fa-reply') ||
                            target.textContent.includes('Reply') ||
                            target.textContent.includes('Trả lời') ||
                            target.getAttribute('aria-label')?.includes('Reply') ||
                            target.getAttribute('aria-label')?.includes('reply');

      if (isCreateButton) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Also prevent default composer from opening
        setTimeout(() => {
          const composer = document.querySelector('#composer');
          if (composer) {
            composer.style.display = 'none';
          }
        }, 50);
        
        console.log('Intercepted create topic click on mobile');
        CustomMobileCreateModal.show('create');
        return false;
      }

      if (isReplyButton) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Get the current discussion from app state or page
        const discussion = app.current?.data?.discussion || app.discussions?.current();
        
        if (!discussion) {
          console.error('Could not find current discussion for reply');
          return;
        }
        
        // Prevent default composer from opening
        setTimeout(() => {
          const composer = document.querySelector('#composer');
          if (composer) {
            composer.style.display = 'none';
          }
        }, 50);
        
        console.log('Intercepted reply click on mobile');
        CustomMobileCreateModal.show('reply', discussion);
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

    console.log('Create topic and reply button interception initialized');
  }
}