import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import DiscussionList from 'flarum/forum/components/DiscussionList';

import CustomDiscussionRow from './components/CustomDiscussionRow';
import DiscussionListHeader from './components/DiscussionListHeader';
import HeroSection from './components/HeroSection';

app.initializers.add('vietvan-ca-themes', () => {
  // Check for register button visibility using document events
  // This ensures the DOM is fully loaded
  const checkRegisterButtonVisibility = () => {
    try {
      // Make sure app.forum exists and is initialized
      if (app.forum && app.forum.attribute) {
        const showRegisterButton = app.forum.attribute('vietvan_ca_show_register_button') === '1';

        if (!showRegisterButton) {
          // remove the register button
          const registerButton = document.querySelector('.item-signUp');
          if (registerButton) {
            registerButton.remove();
          }
        }
      } else {
        console.log('app.forum not ready yet');
      }
    } catch (error) {
      console.error('Error checking register button visibility:', error);
    }
  };

  // Run once when the document is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(checkRegisterButtonVisibility, 100);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(checkRegisterButtonVisibility, 100);
    });
  }

  // Also run when route changes, which is when app.forum might be ready
  app.history.initialized?.then(() => {
    app.history.router.on('changed', checkRegisterButtonVisibility);
  });

  // Extend the DiscussionListItem component to use the custom row
  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    vnode.children = [
      m(CustomDiscussionRow, {
        discussion: this.attrs.discussion,
      }),
    ];
  });

  // Extend the DiscussionList component to add a header
  extend(DiscussionList.prototype, 'view', function (vnode) {
    const originalChildren = vnode.children;
    vnode.children = [m('ul.DiscussionList', [m(DiscussionListHeader), ...originalChildren])];
  });

  // Extend the IndexPage component to add a hero section
  extend(IndexPage.prototype, 'view', function (vnode) {
    const heroSection = m(HeroSection);
    const originalChildren = vnode.children;
    vnode.children = [heroSection, ...originalChildren];

    // Check visibility again when index page renders
    setTimeout(checkRegisterButtonVisibility, 100);
  });
});
