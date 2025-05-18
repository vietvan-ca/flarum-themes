import Component from 'flarum/common/Component';

/**
 * Renders the hero section of the page
 */
export default class HeroSection extends Component {
  view() {
    // Get settings or fall back to translations if not set
    const isHeroEnabled = app.forum.attribute('vietvan_ca_hero_enabled') !== '0';

    if (!isHeroEnabled) {
      return null; // Don't render if the hero section is disabled
    }

    const locale = app.translator.getLocale() || 'en';
    const title = app.forum.attribute(`vietvan_ca_hero_title_${locale}`) || app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    const description =
      app.forum.attribute(`vietvan_ca_hero_description_${locale}`) || app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');
    const backgroundImage = app.forum.attribute('vietvan_ca_hero_background_imageUrl');
    const showText = app.forum.attribute('vietvan_ca_hero_show_text') !== '0';

    return (
      <div className="HeroSection" style={backgroundImage ? { background: `url('${backgroundImage}') center/cover no-repeat` } : {}}>
        {showText ? (
          <div className="container">
            <h1 className="HeroSection-title">{title}</h1>
            <p className="HeroSection-subtitle">{description}</p>
          </div>
        ) : (
          <div className="HeroSection-no-text"></div>
        )}
      </div>
    );
  }
}
