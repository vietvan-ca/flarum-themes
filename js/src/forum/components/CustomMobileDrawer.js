import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import LinkButton from 'flarum/common/components/LinkButton';
import Separator from 'flarum/common/components/Separator';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import Logo from './Logo';

/**
 * Helper to get translation with fallback
 */
function trans(key, fallback) {
  const result = app.translator.trans(`vietvan-ca-flarum-themes.forum.mobile_drawer.${key}`);
  if (result && result !== `vietvan-ca-flarum-themes.forum.mobile_drawer.${key}`) {
    return result;
  }
  return fallback;
}

/**
 * Custom Mobile Drawer component that matches VietVan main website sidebar
 */
export default class CustomMobileDrawer extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    return (
      <div className="CustomMobileDrawer">
        {/* Logo Section */}
        <div className="CustomMobileDrawer-logo">
          <Logo imageStyle={{ height: '40px' }} />
        </div>

        {/* Navigation Menu */}
        <nav className="CustomMobileDrawer-nav">
          <ul className="CustomMobileDrawer-menu">
            {listItems(this.menuItems().toArray())}
          </ul>
        </nav>

        {/* Separator */}
        <div className="CustomMobileDrawer-separator"></div>

        {/* Auth Section */}
        <div className="CustomMobileDrawer-auth">
          {app.session.user ? this.loggedInSection() : this.guestSection()}
        </div>
      </div>
    );
  }

  /**
   * Build menu items for navigation
   */
  menuItems() {
    const items = new ItemList();
    const mainSiteUrl = app.forum.attribute('vietvan_ca_back_button_custom_url') || app.forum.attribute('baseUrl').replace('/forum', '');

    // Trang Chủ (Home)
    items.add('home',
      <li className="CustomMobileDrawer-menuItem">
        <a href={mainSiteUrl} className="CustomMobileDrawer-link">
          {trans('home', 'Trang Chủ')}
        </a>
      </li>,
      100
    );

    // Diễn Đàn (Forum) - Active
    items.add('forum',
      <li className="CustomMobileDrawer-menuItem active">
        <a href={app.forum.attribute('baseUrl')} className="CustomMobileDrawer-link">
          {trans('forum', 'Diễn Đàn')}
        </a>
      </li>,
      90
    );

    // Lưu ý (Notes/Guidelines)
    const guidelinesTag = this.findTagBySlug('luu-y') || this.findTagBySlug('guidelines');
    if (guidelinesTag) {
      items.add('guidelines',
        <li className="CustomMobileDrawer-menuItem">
          <a href={app.route('tag', { tags: guidelinesTag.slug() })} className="CustomMobileDrawer-link">
            {trans('guidelines', 'Lưu ý')}
          </a>
        </li>,
        80
      );
    }

    // Language Selector
    items.add('language',
      <li className="CustomMobileDrawer-menuItem CustomMobileDrawer-menuItem--dropdown">
        {this.languageDropdown()}
      </li>,
      70
    );

    // Theme/Appearance Toggle
    items.add('theme',
      <li className="CustomMobileDrawer-menuItem CustomMobileDrawer-menuItem--dropdown">
        {this.themeToggle()}
      </li>,
      60
    );

    return items;
  }

  /**
   * Find a tag by its slug
   */
  findTagBySlug(slug) {
    if (!app.store || !app.store.all) return null;
    
    const tags = app.store.all('tags');
    return tags.find(tag => tag.slug() === slug);
  }

  /**
   * Language dropdown selector
   */
  languageDropdown() {
    // Check if fof/linguist or flarum/lang-ext is available
    const locales = app.data.locales || {};
    const currentLocale = app.data.locale || 'en';
    
    if (Object.keys(locales).length <= 1) {
      // Only one locale, just show current language
      return (
        <div className="CustomMobileDrawer-languageDisplay">
          <span className="CustomMobileDrawer-link">
            {this.getLocaleName(currentLocale)}
            <i className="fas fa-globe CustomMobileDrawer-icon"></i>
          </span>
        </div>
      );
    }

    return (
      <div className="CustomMobileDrawer-dropdown">
        <button 
          className="CustomMobileDrawer-link CustomMobileDrawer-dropdownTrigger"
          onclick={(e) => this.toggleDropdown(e, 'language')}
        >
          {this.getLocaleName(currentLocale)}
          <i className="fas fa-chevron-down CustomMobileDrawer-chevron"></i>
        </button>
        <ul className="CustomMobileDrawer-dropdownMenu" id="language-dropdown">
          {Object.keys(locales).map(locale => (
            <li key={locale}>
              <a 
                href="javascript:void(0)" 
                onclick={() => this.changeLocale(locale)}
                className={currentLocale === locale ? 'active' : ''}
              >
                {locales[locale]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /**
   * Get locale display name
   */
  getLocaleName(locale) {
    const names = {
      'en': 'English',
      'vi': 'Tiếng Việt'
    };
    return names[locale] || app.data.locales?.[locale] || locale;
  }

  /**
   * Change locale
   */
  changeLocale(locale) {
    if (app.session.user) {
      app.session.user.savePreferences({ locale }).then(() => {
        window.location.reload();
      });
    } else {
      document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365}`;
      window.location.reload();
    }
  }

  /**
   * Theme toggle button
   */
  themeToggle() {
    // Check if night mode extension is available
    const nightMode = app.forum.attribute('darkMode') || localStorage.getItem('fofNightMode');
    
    return (
      <button 
        className="CustomMobileDrawer-link"
        onclick={() => this.toggleTheme()}
      >
        <i className="fas fa-cog CustomMobileDrawer-icon--left"></i>
        {trans('appearance', 'Giao Diện')}
      </button>
    );
  }

  /**
   * Toggle theme (if night mode extension is available)
   */
  toggleTheme() {
    // Try to trigger FoF NightMode
    const nightModeToggle = document.querySelector('.item-nightMode button, .NightMode-toggle');
    if (nightModeToggle) {
      nightModeToggle.click();
    } else {
      // Fallback: toggle dark class on body
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('fofNightMode', isDark ? 'dark' : 'light');
    }
  }

  /**
   * Toggle dropdown visibility
   */
  toggleDropdown(e, dropdownId) {
    e.preventDefault();
    e.stopPropagation();
    
    const dropdown = document.getElementById(`${dropdownId}-dropdown`);
    if (dropdown) {
      dropdown.classList.toggle('open');
    }
  }

  /**
   * Guest section with login/register buttons and social login
   */
  guestSection() {
    const mainSiteUrl = app.forum.attribute('vietvan_ca_back_button_custom_url') || '';
    const baseMainUrl = mainSiteUrl ? mainSiteUrl.replace('/forum', '').replace(/\/$/, '') : '';
    
    // Get JWT SSO URLs if available
    const loginUrl = app.forum.attribute('jwt-sso.login_url') || `${baseMainUrl}/auth/login`;
    const registerUrl = `${baseMainUrl}/auth/register`;

    return (
      <div className="CustomMobileDrawer-guest">
        {/* Register Button */}
        <a href={registerUrl} className="Button Button--primary CustomMobileDrawer-registerBtn">
          {trans('register', 'Đăng ký')}
        </a>

        {/* Login Button */}
        <a href={loginUrl} className="Button Button--secondary CustomMobileDrawer-loginBtn">
          {trans('login', 'Đăng nhập')}
        </a>

        {/* Social Login Separator */}
        <div className="CustomMobileDrawer-socialSeparator">
          <span>{trans('or', 'Hoặc:')}</span>
        </div>

        {/* Social Login Buttons */}
        <div className="CustomMobileDrawer-socialButtons">
          <button 
            className="Button CustomMobileDrawer-socialBtn CustomMobileDrawer-socialBtn--facebook"
            onclick={() => this.socialLogin('facebook')}
          >
            <i className="fab fa-facebook CustomMobileDrawer-socialIcon"></i>
            {trans('login_facebook', 'Đăng nhập bằng Facebook')}
          </button>

          <button 
            className="Button CustomMobileDrawer-socialBtn CustomMobileDrawer-socialBtn--google"
            onclick={() => this.socialLogin('google')}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="CustomMobileDrawer-socialIcon CustomMobileDrawer-socialIcon--img" />
            {trans('login_google', 'Đăng nhập bằng Google')}
          </button>
        </div>
      </div>
    );
  }

  /**
   * Handle social login
   */
  socialLogin(provider) {
    const mainSiteUrl = app.forum.attribute('vietvan_ca_back_button_custom_url') || '';
    const baseMainUrl = mainSiteUrl ? mainSiteUrl.replace('/forum', '').replace(/\/$/, '') : '';
    
    // Redirect to main site's OAuth endpoint
    const currentUrl = encodeURIComponent(window.location.href);
    window.location.href = `${baseMainUrl}/auth/${provider}?redirect=${currentUrl}`;
  }

  /**
   * Logged in user section
   */
  loggedInSection() {
    const user = app.session.user;

    return (
      <div className="CustomMobileDrawer-user">
        {/* User Info */}
        <div className="CustomMobileDrawer-userInfo">
          <div className="CustomMobileDrawer-avatar">
            <img src={user.avatarUrl()} alt={user.displayName()} />
          </div>
          <div className="CustomMobileDrawer-userName">
            <span className="CustomMobileDrawer-displayName">{user.displayName()}</span>
          </div>
        </div>

        {/* User Menu */}
        <ul className="CustomMobileDrawer-userMenu">
          <li>
            <a href={app.route.user(user)} className="CustomMobileDrawer-link">
              <i className="fas fa-user CustomMobileDrawer-icon--left"></i>
              {trans('profile', 'Trang cá nhân')}
            </a>
          </li>
          <li>
            <a href={app.route('settings')} className="CustomMobileDrawer-link">
              <i className="fas fa-cog CustomMobileDrawer-icon--left"></i>
              {trans('settings', 'Cài đặt tài khoản')}
            </a>
          </li>
          <li>
            <button 
              className="CustomMobileDrawer-link CustomMobileDrawer-logout"
              onclick={() => this.logout()}
            >
              <i className="fas fa-sign-out-alt CustomMobileDrawer-icon--left"></i>
              {trans('logout', 'Đăng xuất')}
            </button>
          </li>
        </ul>
      </div>
    );
  }

  /**
   * Handle logout
   */
  logout() {
    const confirmMessage = trans('logout_confirm', 'Bạn có chắc chắn muốn đăng xuất?');
    if (confirm(confirmMessage)) {
      app.session.logout();
    }
  }
}
