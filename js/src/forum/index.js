import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Drawer from 'flarum/forum/components/Drawer';

import CustomDiscussionRow from './components/CustomDiscussionRow';
import DiscussionListHeader from './components/DiscussionListHeader';
import HeroSection from './components/HeroSection';
import BackButton from './components/BackButton';
import Logo from './components/Logo';
import CustomDiscussionTabNavigation from './components/CustomDiscussionTabNavigation';
import CustomMobileDiscussionToolbar from './components/CustomMobileDiscussionToolbar';
import CustomMobileDrawer from './components/CustomMobileDrawer';

app.initializers.add('vietvan-ca-themes', () => {
  // Extend Drawer component to use custom mobile drawer
  extend(Drawer.prototype, 'view', function (vnode) {
    // Add custom mobile drawer to the drawer content
    if (vnode && vnode.children) {
      // Prepend custom mobile drawer
      vnode.children = [
        m(CustomMobileDrawer),
        ...vnode.children
      ];
    }
  });

  // Utility function to find element by class path
  const findElementByPath = (vnode, path) => {
    let current = vnode;

    for (const className of path) {
      if (!current?.children || !Array.isArray(current.children)) {
        return null;
      }

      const found = current.children.find((child) => child?.attrs?.className?.includes(className));

      if (!found) return null;
      current = found;
    }

    return current;
  };

  // Check for register button visibility using document events
  const checkRegisterButtonVisibility = () => {
    try {
      if (app.forum?.attribute) {
        const showRegisterButton = app.forum.attribute('vietvan_ca_show_register_button') === '1';

        if (!showRegisterButton) {
          const registerButton = document.querySelector('.item-signUp');
          registerButton?.remove();
        }
      }
    } catch (error) {
      console.error('Error checking register button visibility:', error);
    }
  };

  // Check for custom logo, if it exists, remove the default logo
  const checkCustomLogo = () => {
    try {
      const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
      const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

      if (lightLogoPath || darkLogoPath) {
        const defaultLogo = document.querySelector('.Header-title');
        defaultLogo?.remove();
      }
    } catch (error) {
      console.error('Error checking custom logo:', error);
    }
  };

  // Run all component checks
  const runComponentChecks = () => {
    checkRegisterButtonVisibility();
    checkCustomLogo();
  };

  // Initialize component checks
  const initializeChecks = () => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(runComponentChecks, 100);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(runComponentChecks, 100);
      });
    }

    // Run when route changes
    app.history.initialized?.then(() => {
      app.history.router.on('changed', runComponentChecks);
    });
  };

  // Initialize checks
  initializeChecks();

  // Extend the HeaderPrimary component to replace the logo with a custom one
  extend(HeaderPrimary.prototype, 'items', function (items) {
    const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
    const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

    if (lightLogoPath || darkLogoPath) {
      items.add('logo', <Logo />, 90);
    }
  });

  // Extend the HeaderSecondary component to remove the search component
  extend(HeaderSecondary.prototype, 'items', function (items) {
    if (items.has('search')) {
      items.remove('search');
    }
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

  // Extend the IndexPage component to add a hero section and custom tabs
  extend(IndexPage.prototype, 'view', function (vnode) {
    // Add HeroSection at the beginning
    const heroSectionInstance = m(HeroSection);
    const originalChildren = vnode.children;
    vnode.children = [heroSectionInstance, ...originalChildren];

    // Create custom mobile discussion toolbar instance
    const customMobileDiscussionToolbarInstance = <CustomMobileDiscussionToolbar />;

    // Create custom tabs instance
    const customTabsInstance = <CustomDiscussionTabNavigation />;

    // Find toolbar using optimized path traversal
    const toolbarPath = ['container', 'sideNavContainer', 'IndexPage-results', 'IndexPage-toolbar', 'IndexPage-toolbar-view'];
    const toolbarDiv = findElementByPath({ children: originalChildren }, toolbarPath);

    if (toolbarDiv) {
      // Replace toolbar content with custom tabs
      toolbarDiv.children = [customMobileDiscussionToolbarInstance, customTabsInstance];
    } else {
      console.warn('IndexPage-toolbar-view not found. CustomTabNavigation not added.');
    }

    // Run component checks after render
    setTimeout(runComponentChecks, 100);
  });

  // Add mobile logo using DOM manipulation
  extend(IndexPage.prototype, 'oncreate', function () {
    const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
    const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

    if (lightLogoPath || darkLogoPath) {
      this.addMobileLogo();
    }
  });

  extend(IndexPage.prototype, 'onupdate', function () {
    const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
    const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

    if (lightLogoPath || darkLogoPath) {
      this.addMobileLogo();
    }
  });

  // Add method to IndexPage prototype
  IndexPage.prototype.addMobileLogo = function () {
    const navElement = document.getElementById('app-navigation');

    if (navElement && !navElement.querySelector('.Navigation-logo')) {
      // Create logo container
      const logoDiv = document.createElement('div');
      logoDiv.className = 'Navigation-logo Mobile-only';

      // Mount Logo component into the div
      m.mount(logoDiv, {
        view: () => m(Logo, { imageStyle: { height: '30px' } }),
      });

      // Insert at the beginning of navigation (before App-backControl)
      const backControl = navElement.querySelector('.App-backControl');
      if (backControl) {
        navElement.insertBefore(logoDiv, backControl);
      } else {
        navElement.insertBefore(logoDiv, navElement.firstChild);
      }
    }
  };

  extend(IndexPage.prototype, 'onremove', function () {
    const navElement = document.getElementById('app-navigation');
    const logoElement = navElement?.querySelector('.Navigation-logo');
    
    if (logoElement) {
      m.mount(logoElement, null); // Unmount the component
      logoElement.remove();
    }
  });

  // Adding scale font size feature
  let currentScale = 1.05;

  // Apply initial font zoom
  applyFontZoom(currentScale);
});

function applyFontZoom(scale) {
  // Remove existing font zoom styles
  const existingStyle = document.getElementById('font-zoom-style');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create new style element
  const style = document.createElement('style');
  style.id = 'font-zoom-style';

  // Apply zoom to various elements
  style.textContent = `
    .App {
      font-size: ${scale}rem !important;
    }
    
    /* Ensure consistent scaling across all text elements */
    .Post-body,
    .PostPreview-body,
    .UserCard-info,
    .NotificationGrid-content,
    .Dropdown-menu,
    .Modal-body,
    .Form-group label,
    .Form-group input,
    .Form-group textarea,
    .TagLabel,
    .Badge {
      font-size: ${scale}em !important;
    }
    
    /* Scale headings proportionally */
    h1 { font-size: ${scale * 2}rem !important; }
    h2 { font-size: ${scale * 1.5}rem !important; }
    h3 { font-size: ${scale * 1.25}rem !important; }
    h4 { font-size: ${scale * 1.125}rem !important; }
    h5 { font-size: ${scale * 1}rem !important; }
    h6 { font-size: ${scale * 0.875}rem !important; }
    
    /* Scale code blocks */
    code,
    pre {
      font-size: ${scale * 0.875}em !important;
    }
  `;

  document.head.appendChild(style);

  // Store for guests as mitigate if improved
  localStorage.setItem('flarum-font-zoom-scale', scale.toString());
}
