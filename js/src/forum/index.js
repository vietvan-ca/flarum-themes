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
  // Set Light Theme as Default
  // ==========================================
  const setDefaultLightTheme = () => {
    // Only set default if user hasn't explicitly chosen a theme preference
    if (app.session.user) {
      const nightModePreference = app.session.user.preferences().fofNightMode;
      
      // If night mode preference is null/undefined, set default to light
      if (nightModePreference === null || nightModePreference === undefined) {
        app.session.user.savePreferences({
          fofNightMode: false
        }).catch(() => {
          // Ignore errors if preferences can't be saved
        });
      }
    }
    
    // For guests, remove any dark theme classes that might be applied by system preferences
    const body = document.body;
    const html = document.documentElement;
    
    // Check if no explicit theme choice has been made
    const hasExplicitDarkTheme = localStorage.getItem('fof-nightmode') === 'true' || 
                                 localStorage.getItem('darkMode') === 'true';
    
    if (!hasExplicitDarkTheme) {
      // Remove potential system-applied dark classes
      [body, html].forEach(element => {
        if (element) {
          const darkClasses = ['dark', 'dark-mode', 'fof-nightmode'];
          darkClasses.forEach(className => {
            element.classList.remove(className);
          });
        }
      });
    }
  };

  // Initialize default light theme
  const initializeDefaultTheme = () => {
    // Set default theme once when app loads
    setTimeout(setDefaultLightTheme, 100);
  };

  initializeDefaultTheme();

  // ==========================================
  // Auto Text Color for Discussion Tags and Buttons
  // ==========================================
  const adjustTextColors = () => {
    // Handle discussion tags
    const coloredTags = document.querySelectorAll('.discussion-tag.colored');
    coloredTags.forEach(tag => adjustElementTextColor(tag, 'backgroundColor'));
    
    // Handle colored buttons (like create discussion button)
    const coloredButtons = document.querySelectorAll('.Button--tagColored, .Button--primary[style*="--color"]');
    coloredButtons.forEach(button => {
      // Check if button has custom --color property
      const customColor = button.style.getPropertyValue('--color');
      if (customColor) {
        adjustElementTextColor(button, 'customColor', customColor);
      }
    });
  };

  const adjustElementTextColor = (element, colorSource, customColor = null) => {
    let backgroundColor;
    
    if (colorSource === 'customColor' && customColor) {
      backgroundColor = customColor;
    } else {
      backgroundColor = window.getComputedStyle(element).backgroundColor;
    }
    
    // Parse color values - handle both rgb() and hex formats
    let r, g, b;
    
    if (backgroundColor.startsWith('#')) {
      // Handle hex colors - fix the parsing
      const hex = backgroundColor.replace('#', '');
      if (hex.length === 3) {
        // Handle short hex like #FFF
        r = parseInt(hex.substr(0, 1) + hex.substr(0, 1), 16);
        g = parseInt(hex.substr(1, 1) + hex.substr(1, 1), 16);
        b = parseInt(hex.substr(2, 1) + hex.substr(2, 1), 16);
      } else if (hex.length === 6) {
        // Handle full hex like #FFF300
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else {
        return; // Skip if invalid hex format
      }
    } else {
      // Handle rgb() colors
      const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (rgbMatch) {
        [, r, g, b] = rgbMatch.map(Number);
      } else {
        return; // Skip if can't parse color
      }
    }
    
    // Calculate different brightness metrics
    const wcagLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const perceivedBrightness = Math.sqrt(0.241 * r * r + 0.691 * g * g + 0.068 * b * b) / 255;
    const averageBrightness = (r + g + b) / (3 * 255);
    
    // Calculate saturation to detect bright colors
    const max = Math.max(r, g, b) / 255;
    const min = Math.min(r, g, b) / 255;
    const saturation = max === 0 ? 0 : (max - min) / max;
    
    // Calculate contrast ratios with black and white text
    const contrastWithBlack = (Math.max(wcagLuminance, 0.05) + 0.05) / (0.05 + 0.05);
    const contrastWithWhite = (1.05) / (Math.max(wcagLuminance, 0.05) + 0.05);
    
    // For very bright colors like yellow (#FFF300), use lower threshold
    // Yellow and bright colors should use black text
    const brightnessThreshold = saturation > 0.8 && wcagLuminance > 0.7 ? 0.6 : 
                               saturation > 0.4 ? 0.75 : 0.65;
    
    const shouldUseBlackText = wcagLuminance > brightnessThreshold && 
                               perceivedBrightness > (brightnessThreshold - 0.1) && 
                               averageBrightness > (brightnessThreshold - 0.15) &&
                               contrastWithBlack > contrastWithWhite;
    
    // Apply styles with !important for stronger override
    element.style.setProperty('color', shouldUseBlackText ? '#000000' : '#ffffff', 'important');
    
    // Add appropriate text shadow with better contrast for colorful backgrounds
    const textShadow = shouldUseBlackText 
      ? '0 0 1px rgba(255, 255, 255, 0.6)' 
      : '0 0 1px rgba(0, 0, 0, 0.8)';
    element.style.setProperty('text-shadow', textShadow, 'important');
    
    // For buttons, also ensure the background color is applied correctly
    if (colorSource === 'customColor' && customColor) {
      element.style.setProperty('background-color', customColor, 'important');
      // Remove any conflicting classes
      element.classList.remove('text-contrast--dark', 'text-contrast--light');
    }
  };

  // Initialize text color adjustment
  const initializeTextColors = () => {
    // Initial run
    setTimeout(adjustTextColors, 200);
    
    // Run on route changes
    if (app.history?.initialized) {
      app.history.initialized.then(() => {
        app.history.router.on('changed', () => {
          setTimeout(adjustTextColors, 200);
        });
      });
    }
    
    // Run periodically to catch dynamically loaded content
    setInterval(adjustTextColors, 3000);
    
    // Watch for DOM changes (new discussions loaded)
    const observer = new MutationObserver(() => {
      setTimeout(adjustTextColors, 100);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  initializeTextColors();

  // ==========================================
  // TextEditor Toolbar Reordering & Cleanup
  // ==========================================
  // Reorder and hide items in TextEditor controls
  extend(TextEditor.prototype, 'controlItems', function(items) {
    // Debug: log all available items
    console.log('Available controlItems:', Array.from(items.toArray().map(item => item.itemName)));
    
    // Hide unwanted items - try multiple possible names
    const itemsToHide = [
      'fof-upload',      // File upload button
      'fof-upload-media', // FoF upload media button
      'fofUpload',       // Alternative naming
      'upload',          // Alternative naming
      'rich-text',       // Toggle Rich Text Mode
      'richText',        // Alternative naming
      'emoji',           // Insert emoji
      'preview',         // Preview button
    ];
    
    itemsToHide.forEach(key => {
      if (items.has(key)) {
        console.log('Removing controlItem:', key);
        items.remove(key);
      }
    });

    // Set priorities (higher = appears first/left)
    if (items.has('TextEditor-toolbar')) items.setPriority('TextEditor-toolbar', 90);
    if (items.has('mention')) items.setPriority('mention', 80);
    if (items.has('submit')) items.setPriority('submit', -100);
  });

  // Customize ProseMirror toolbar items
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    // Debug: log all available toolbar items
    console.log('Available toolbarItems:', Array.from(items.toArray().map(item => item.itemName)));
    
    // Hide specific toolbar items - try multiple possible names
    const toolbarItemsToHide = [
      'nodeType',        // P/H1-H6 dropdown
      'node_type',       // Alternative naming
      'code',            // Inline code
      'quote',           // Quote
      'link',            // Link dropdown
      'image',           // Image dropdown
      'more',            // Additional controls dropdown
      'additional',      // Alternative naming
      'extra',           // Alternative naming
    ];
    
    toolbarItemsToHide.forEach(key => {
      if (items.has(key)) {
        console.log('Removing toolbarItem:', key);
        items.remove(key);
      }
    });

    // Reorder remaining toolbar items
    if (items.has('bold')) items.setPriority('bold', 100);
    if (items.has('italic')) items.setPriority('italic', 90);
    if (items.has('bullet_list')) items.setPriority('bullet_list', 80);
    if (items.has('ordered_list')) items.setPriority('ordered_list', 70);
  });

  // Fallback: Use DOM manipulation to hide elements
  const hideTextEditorElements = () => {
    // Hide upload buttons
    const uploadButtons = document.querySelectorAll('.item-fof-upload, .fof-upload-button');
    uploadButtons.forEach(el => el.style.display = 'none');
    
    // Hide node type dropdown (P/H1-H6)
    const nodeTypeDropdowns = document.querySelectorAll('.NodeTypeButton, .NodeTypeDropdownMenu');
    nodeTypeDropdowns.forEach(el => {
      if (el.closest) {
        const container = el.closest('.ButtonGroup.Dropdown');
        if (container) container.style.display = 'none';
      }
    });
    
    // Hide link dropdown
    const linkDropdowns = document.querySelectorAll('button[aria-label*="link" i], button[title*="link" i]');
    linkDropdowns.forEach(el => {
      if (el.querySelector('.fa-link')) {
        const container = el.closest('.ButtonGroup.Dropdown');
        if (container) container.style.display = 'none';
      }
    });
    
    // Hide image dropdown
    const imageDropdowns = document.querySelectorAll('button[aria-label*="image" i], button[title*="image" i]');
    imageDropdowns.forEach(el => {
      if (el.querySelector('.fa-image')) {
        const container = el.closest('.ButtonGroup.Dropdown');
        if (container) container.style.display = 'none';
      }
    });
    
    // Hide additional controls (more dropdown)
    const moreDropdowns = document.querySelectorAll('button[aria-label*="Additional Controls" i], button[title*="Additional Controls" i]');
    moreDropdowns.forEach(el => {
      if (el.querySelector('.fa-plus')) {
        const container = el.closest('.ButtonGroup.Dropdown');
        if (container) container.style.display = 'none';
      }
    });
    
    // Hide any remaining unwanted items by icon
    const iconsToHide = [
      '.fa-file-upload',   // Upload icon
      '.fa-link',          // Link icon (in dropdowns)
      '.fa-image',         // Image icon (in dropdowns)
      '.fa-plus',          // More controls icon (in dropdowns)
    ];
    
    iconsToHide.forEach(iconSelector => {
      const icons = document.querySelectorAll(iconSelector);
      icons.forEach(icon => {
        const button = icon.closest('button');
        if (button) {
          const dropdown = button.closest('.ButtonGroup.Dropdown');
          if (dropdown) {
            dropdown.style.display = 'none';
          } else {
            button.style.display = 'none';
          }
        }
      });
    });
  };

  // Initialize DOM-based hiding
  const initializeTextEditorHiding = () => {
    // Initial run
    setTimeout(hideTextEditorElements, 300);
    
    // Run on route changes
    if (app.history?.initialized) {
      app.history.initialized.then(() => {
        app.history.router.on('changed', () => {
          setTimeout(hideTextEditorElements, 300);
        });
      });
    }
    
    // Watch for TextEditor creation
    const observer = new MutationObserver(() => {
      setTimeout(hideTextEditorElements, 100);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Also run periodically
    setInterval(hideTextEditorElements, 2000);
  };

  initializeTextEditorHiding();

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
