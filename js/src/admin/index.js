import app from 'flarum/admin/app';
import ThemeSettingsPage from './components/ThemeSettingsPage';
import Logo from './components/Logo';
import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/admin/components/HeaderPrimary';

app.initializers.add('vietvan-ca-themes', () => {
  // Check for custom logo, if it exists, remove the default logo
  const checkCustomLogo = () => {
    try {
      const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
      const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

      if (lightLogoPath || darkLogoPath) {
        // Remove the default logo
        const defaultLogo = document.querySelector('.Header-title');
        if (defaultLogo) {
          defaultLogo.remove();
        }
      }
    } catch (error) {
      console.error('Error checking custom logo:', error);
    }
  };

  // Run all component checks
  const runComponentChecks = () => {
    checkCustomLogo();
  };

  // Run once when the document is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(runComponentChecks, 100);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(runComponentChecks, 100);
    });
  }

  // Also run when route changes, which is when app.forum might be ready
  app.history.initialized?.then(() => {
    app.history.router.on('changed', runComponentChecks);
  });

  // Extend the HeaderPrimary component to replace the logo with a custom one
  extend(HeaderPrimary.prototype, 'items', function (items) {
    const lightLogoPath = app.forum.attribute('vietvan_ca_logoUrl');
    const darkLogoPath = app.forum.attribute('vietvan_ca_logo_darkUrl');

    if (lightLogoPath || darkLogoPath) {
      // Use the custom Logo component
      items.add('logo', <Logo />, 90);
    }
  });

  app.extensionData.for('vietvan-ca-themes').registerPage(ThemeSettingsPage);
});
