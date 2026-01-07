import Component from 'flarum/common/Component';
import Search from 'flarum/forum/components/Search';
import CustomMobileDiscussionToolbar from './CustomMobileDiscussionToolbar';

export default class HeroSection extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    const forum = app.forum;
    // enabled?
    this.enabled = forum.attribute('vietvan_ca_hero_enabled') === '1';
    if (!this.enabled) return;

    // Initial mode - start with light as default
    this.mode = 'light';

    // Setup listeners first
    if (flarum.extensions['fof-nightmode']) {
      this.setupNightModeListener();
    }
    this.setupSystemModeListener();
    this.setupBodyClassObserver();

    // Compute actual mode after a delay to ensure theme has initialized
    setTimeout(() => {
      this.mode = this.computeMode();
      m.redraw();
    }, 100);

    // Re-check mode after a longer delay (in case FoF extension hasn't initialized yet)
    setTimeout(() => {
      const newMode = this.computeMode();
      if (newMode !== this.mode) {
        this.mode = newMode;
        m.redraw();
      }
    }, 500);

    // locale-specific text
    this.locale = app.translator.getLocale() || 'en';
    const titleKey = `vietvan_ca_hero_title_${this.locale}`;
    const descKey = `vietvan_ca_hero_description_${this.locale}`;

    this.title = forum.attribute(titleKey) ?? app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    this.description = forum.attribute(descKey) ?? app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');

    // show or hide text overlay?
    this.showText = forum.attribute('vietvan_ca_hero_show_text') === '1';

    // has custom text color?
    this.hasCustomColor = forum.attribute('vietvan_ca_hero_custom_color_enabled') === '1';
    this.titleStyle = {};
    this.descriptionStyle = {};

    if (this.hasCustomColor) {
      const titleColor = forum.attribute('vietvan_ca_hero_title_color') || '#ffffff';
      const subtitleColor = forum.attribute('vietvan_ca_hero_subtitle_color') || '#ffffff';

      this.titleStyle = { color: titleColor };
      this.descriptionStyle = { color: subtitleColor };
    }
  }

  computeMode() {
    // First, check if FoF Night Mode is active by checking the body class
    // This is the most reliable way to detect actual dark mode state
    if (document.body.classList.contains('flarum--night')) {
      return 'dark';
    }

    // Check if user is logged in
    const user = app.session.user;

    if (user) {
      // Logged in: use user preference from FoF Night Mode
      const pref = user.preferences().fofNightMode;
      // FoF Night Mode stores as integers: 0 = auto, 1 = light, 2 = dark
      if (pref === 2 || pref === '2') return 'dark';
      if (pref === 1 || pref === '1') return 'light';
      if (pref === 0 || pref === '0' || pref === null || pref === undefined) {
        // For auto/null preferences, default to light mode (respecting our default theme setting)
        // Only use system preference if user explicitly wants auto mode
        const isExplicitAuto = pref === 0 || pref === '0';
        if (isExplicitAuto) {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        // Default to light for null/undefined (new users)
        return 'light';
      }
      return 'light';
    }

    // Guest: check cookie
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('flarum_nightmode='))
      ?.split('=')[1];

    if (cookieValue === '2') return 'dark';
    if (cookieValue === '1') return 'light';
    if (cookieValue === '0') {
      // Explicit system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // No cookie found - default to light mode (respecting our default theme setting)
    return 'light';
  }

  setupNightModeListener() {
    this.nightModeHandler = (event) => {
      this.mode = event.detail === 'day' ? 'light' : 'dark';
      m.redraw();
    };
    document.addEventListener('fofnightmodechange', this.nightModeHandler);
  }

  setupSystemModeListener() {
    // Listen to OS-level dark mode changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemModeHandler = (e) => {
      const newMode = this.computeMode();
      if (newMode !== this.mode) {
        this.mode = newMode;
        m.redraw();
      }
    };
    mediaQuery.addEventListener('change', this.systemModeHandler);
  }

  setupBodyClassObserver() {
    // Watch for changes to body class (when FoF Night Mode toggles)
    this.bodyObserver = new MutationObserver(() => {
      const newMode = this.computeMode();
      if (newMode !== this.mode) {
        this.mode = newMode;
        m.redraw();
      }
    });

    this.bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  onremove() {
    // Clean up listeners
    if (this.nightModeHandler) {
      document.removeEventListener('fofnightmodechange', this.nightModeHandler);
    }
    if (this.systemModeHandler) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.removeEventListener('change', this.systemModeHandler);
    }
    if (this.bodyObserver) {
      this.bodyObserver.disconnect();
    }
  }

  getBackgroundStyle() {
    const forum = app.forum;
    const bgAttr = this.mode === 'dark' ? 'vietvan_ca_hero_background_image_darkUrl' : 'vietvan_ca_hero_background_imageUrl';
    const bgUrl = forum.attribute(bgAttr);

    return bgUrl
      ? {
          height: '35vh',
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      : undefined;
  }

  view() {
    // Don't render if not enabled
    if (!this.enabled) return null;

    // Only show on the homepage (root path)
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && currentPath !== '') return null;

    // Get background style dynamically on each render
    const backgroundStyle = this.getBackgroundStyle();

    return (
      <div className="HeroSection" style={backgroundStyle}>
        {this.showText && (
          <div className="container">
            <h1 className="HeroSection-title" style={this.titleStyle}>
              {this.title}
            </h1>
            <p className="HeroSection-subtitle" style={this.descriptionStyle}>
              {this.description}
            </p>
          </div>
        )}
        <div className="container">
          <Search state={app.search} />
        </div>
      </div>
    );
  }
}
