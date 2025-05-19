import Component from 'flarum/common/Component';

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
    const descKey  = `vietvan_ca_hero_description_${this.locale}`;

    this.title       = forum.attribute(titleKey) ?? app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    this.description = forum.attribute(descKey)  ?? app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');

    // show or hide text overlay?
    this.showText = forum.attribute('vietvan_ca_hero_show_text') === '1';

    // pick light vs dark background
    const mode = app.session.user?.preferences().fofNightMode === 2 ? 'dark' : 'light';
    const bgAttr = mode === 'dark'
      ? 'vietvan_ca_hero_background_image_darkUrl'
      : 'vietvan_ca_hero_background_imageUrl';

    const bgUrl = forum.attribute(bgAttr);

    // prebuild the style object
    this.style = bgUrl
      ? {
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      : undefined;
  }

  view() {
    if (!this.enabled) return null;

    return (
      <div className="HeroSection" style={this.style}>
        {this.showText && (
          <div className="container">
            <h1 className="HeroSection-title">{this.title}</h1>
            <p className="HeroSection-subtitle">{this.description}</p>
          </div>
        )}
      </div>
    );
  }
}
