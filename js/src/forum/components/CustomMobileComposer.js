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

      // Check if clicked element or parent is a create topic button
      const button = e.target.closest('.CustomMobileDiscussionToolbar-button') ||
                     e.target.closest('.item-newDiscussion') ||
                     e.target.closest('[aria-label*="Start"]') ||
                     e.target.closest('[title*="discussion"]');
      
      // Also check for buttons that contain text about starting discussion
      const buttonText = e.target.textContent || '';
      const isCreateButton = buttonText.includes('Start') || 
                             buttonText.includes('discussion') ||
                             buttonText.includes('Tạo') ||
                             buttonText.includes('Viết');
      
      if (button || isCreateButton) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Intercepted create topic click on mobile');
        CustomMobileCreateModal.show();
        return false;
      }
    });

    console.log('Create topic button interception initialized');
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