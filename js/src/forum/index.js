import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import TextEditor from 'flarum/common/components/TextEditor';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import Button from 'flarum/common/components/Button';

import CustomDiscussionRow from './components/CustomDiscussionRow';
import DiscussionListHeader from './components/DiscussionListHeader';
import HeroSection from './components/HeroSection';
import BackButton from './components/BackButton';
import Logo from './components/Logo';
import CustomDiscussionTabNavigation from './components/CustomDiscussionTabNavigation';
import CustomMobileDiscussionToolbar from './components/CustomMobileDiscussionToolbar';
import CustomMobileDrawer from './components/CustomMobileDrawer';

app.initializers.add('vietvan-ca-themes', () => {
  // ==========================================
  // Change Hide Button Icon to Eye
  // ==========================================
  
  // Use DOM manipulation to change the hide button icon after render
  const changeHideButtonIcons = () => {
    // Check if user level.id is 1
    // if (app.session.user && app.session.user.attribute('level') && app.session.user.attribute('level').id == 1) {
    //   // Change hide button icons in discussion controls
    //   const hideButtons = document.querySelectorAll('.item-hide button .fa-trash-alt');
    //   hideButtons.forEach(icon => {
    //     if (icon.classList.contains('fa-trash-alt')) {
    //       icon.classList.remove('fa-trash-alt');
    //       icon.classList.add('fa-eye');
    //     }
    //   });
      
    //   // Change hidden badge icons
    //   const hiddenBadges = document.querySelectorAll('.item-hidden .fas.fa-trash, .Badge--hidden .fas.fa-trash');
    //   hiddenBadges.forEach(icon => {
    //     if (icon.classList.contains('fa-trash')) {
    //       icon.classList.remove('fa-trash');
    //       icon.classList.add('fa-eye');
    //     }
    //   });
    // } else {
    //   // Hide hide buttons and hidden badges for users with level.id != 1 or guests
    //   const hideButtonItems = document.querySelectorAll('.item-hide');
    //   hideButtonItems.forEach(item => {
    //     item.style.display = 'none';
    //   });
      
    //   const hiddenBadgeItems = document.querySelectorAll('.item-hidden');
    //   hiddenBadgeItems.forEach(item => {
    //     item.style.display = 'none';
    //   });
    // }
    const hideButtons = document.querySelectorAll('.item-hide button .fa-trash-alt');
    hideButtons.forEach(icon => {
      if (icon.classList.contains('fa-trash-alt')) {
        icon.classList.remove('fa-trash-alt');
        icon.classList.add('fa-eye');
      }
    });
    
    // Change hidden badge icons
    const hiddenBadges = document.querySelectorAll('.item-hidden .fas.fa-trash, .Badge--hidden .fas.fa-trash');
    hiddenBadges.forEach(icon => {
      if (icon.classList.contains('fa-trash')) {
        icon.classList.remove('fa-trash');
        icon.classList.add('fa-eye');
      }
    });
  };

  // Run icon replacement on page load and route changes
  const initializeHideButtonChanges = () => {
    // Initial run
    setTimeout(changeHideButtonIcons, 500);
    
    // Run on route changes
    if (app.history?.initialized) {
      app.history.initialized.then(() => {
        app.history.router.on('changed', () => {
          setTimeout(changeHideButtonIcons, 500);
        });
      });
    }
    
    // Also run periodically to catch dynamically loaded content
    setInterval(changeHideButtonIcons, 2000);
  };

  initializeHideButtonChanges();

  // ==========================================
  // Force Light Theme
  // ==========================================
  const forceLightTheme = () => {
    // Remove dark theme classes from body and html
    const elementsToCheck = [document.documentElement, document.body];
    
    elementsToCheck.forEach(element => {
      if (element) {
        // Remove common dark theme classes
        const darkClasses = [
          'dark', 
          'dark-mode', 
          'night-mode', 
          'fof-nightmode', 
          'App--dark',
          'theme-dark'
        ];
        
        darkClasses.forEach(className => {
          element.classList.remove(className);
        });
        
        // Force light theme classes
        element.classList.add('light', 'light-mode', 'theme-light');
      }
    });
    
    // Override any inline dark theme styles
    const style = document.createElement('style');
    style.id = 'force-light-theme';
    style.textContent = `
      /* Force light theme colors */
      :root {
        --primary-color: #239cdb !important;
        --secondary-color: #acd2ed !important;
        --dark-color: #415161 !important;
        --muted-color: #869ba4 !important;
        --muted-more-color: #c0ccce !important;
        --shadow-color: rgba(0,0,0,0.25) !important;
        --body-bg: #fff !important;
        --control-bg: #fff !important;
        --control-color: #495057 !important;
        --overlay-bg: rgba(0, 0, 0, 0.6) !important;
        --code-bg: rgba(255, 255, 255, 0.9) !important;
        --code-color: #c7254e !important;
      }
      
      /* Ensure body background is always light */
      body, 
      html,
      .App {
        background-color: #fff !important;
        color: #212529 !important;
      }
      
      /* Force light theme for common components */
      .Header,
      .Hero,
      .sideNav,
      .Modal,
      .Dropdown-menu,
      .Post,
      .ComposerBody {
        background-color: #fff !important;
        color: #212529 !important;
      }
      
      /* Override any dark theme text colors */
      .PostBody,
      .Post-body,
      .TextEditor-editor {
        color: #212529 !important;
      }
    `;
    
    // Remove existing force light theme style if exists
    const existingStyle = document.getElementById('force-light-theme');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);
  };

  // Initialize light theme forcing
  const initializeLightTheme = () => {
    // Force light theme immediately
    forceLightTheme();
    
    // Override user preferences if night mode extension is present
    if (app.session.user) {
      // Override night mode preference
      app.session.user.savePreferences({
        fofNightMode: false,
        fofNightMode_perDevice: false,
        darkMode: false,
        nightMode: false
      }).catch(() => {
        // Ignore errors if preferences can't be saved
      });
    }
    
    // Force light theme on route changes
    if (app.history?.initialized) {
      app.history.initialized.then(() => {
        app.history.router.on('changed', forceLightTheme);
      });
    }
    
    // Monitor for dynamic class changes and force light theme
    const observer = new MutationObserver(() => {
      forceLightTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Also run periodically to catch any dynamic changes
    setInterval(forceLightTheme, 1000);
  };

  initializeLightTheme();

  // ==========================================
  // TextEditor Toolbar Reordering & Cleanup
  // ==========================================
  // Reorder and hide items in TextEditor controls
  extend(TextEditor.prototype, 'controlItems', function(items) {
    // Hide unwanted items
    const itemsToHide = [
      'fof-upload',      // File upload button
      'rich-text',       // Toggle Rich Text Mode
      'emoji',           // Insert emoji
    ];
    
    itemsToHide.forEach(key => {
      if (items.has(key)) {
        items.remove(key);
      }
    });

    // Set priorities (higher = appears first/left)
    // Order: fof-upload-media, toolbar (B, I, lists, etc.), mention, submit
    if (items.has('fof-upload-media')) items.setPriority('fof-upload-media', 100);
    if (items.has('TextEditor-toolbar')) items.setPriority('TextEditor-toolbar', 90);
    if (items.has('mention')) items.setPriority('mention', 80);
    if (items.has('submit')) items.setPriority('submit', -100); // Move to end (right)
  });

  // Customize ProseMirror toolbar items
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    // Hide specific toolbar items
    const toolbarItemsToHide = [
      'nodeType',        // P/H1-H6 dropdown
      'code',            // Inline code
      'quote',           // Quote
      'link',            // Link dropdown
      'image',           // Image dropdown
    ];
    
    toolbarItemsToHide.forEach(key => {
      if (items.has(key)) {
        items.remove(key);
      }
    });

    // Reorder remaining toolbar items (Bold, Italic, Lists, More dropdown)
    if (items.has('bold')) items.setPriority('bold', 100);
    if (items.has('italic')) items.setPriority('italic', 90);
    if (items.has('bullet_list')) items.setPriority('bullet_list', 80);
    if (items.has('ordered_list')) items.setPriority('ordered_list', 70);
    if (items.has('more')) items.setPriority('more', 60);
  });

  // Use oncreate to inject custom mobile drawer after IndexPage is created
  extend(IndexPage.prototype, 'oncreate', function() {
    this.injectCustomDrawer();
  });

  extend(IndexPage.prototype, 'onupdate', function() {
    this.injectCustomDrawer();
  });

  // Add method to inject custom drawer
  IndexPage.prototype.injectCustomDrawer = function() {
    const drawer = document.getElementById('drawer');
    if (drawer && !drawer.querySelector('.CustomMobileDrawer')) {
      const drawerContent = drawer.querySelector('.Drawer-content, .App-drawer');
      if (drawerContent) {
        // Create container if it doesn't exist
        let customDrawerContainer = drawerContent.querySelector('.CustomMobileDrawer-container');
        if (!customDrawerContainer) {
          customDrawerContainer = document.createElement('div');
          customDrawerContainer.className = 'CustomMobileDrawer-container';
          
          // Mount the custom drawer component
          m.mount(customDrawerContainer, CustomMobileDrawer);
          
          // Prepend to drawer content
          drawerContent.insertBefore(customDrawerContainer, drawerContent.firstChild);
        }
      }
    }
  };

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
