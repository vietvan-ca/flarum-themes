import Component from 'flarum/common/Component';
import Search from 'flarum/forum/components/Search';

export default class HeroSection extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    const forum = app.forum;
    // enabled?
    this.enabled = forum.attribute('vietvan_ca_hero_enabled') === '1';
    if (!this.enabled) return;

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

  getBackgroundStyle() {
    const forum = app.forum;
    const mode = app.session.user?.preferences().fofNightMode === 2 ? 'dark' : 'light';
    const bgAttr = mode === 'dark' ? 'vietvan_ca_hero_background_image_darkUrl' : 'vietvan_ca_hero_background_imageUrl';
    const bgUrl = forum.attribute(bgAttr);

    return bgUrl
      ? {
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '30vh',
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
          <Search state={app.search} />{' '}
        </div>
      </div>
    );
  }
}