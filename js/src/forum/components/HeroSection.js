import Component from 'flarum/common/Component';

/**
 * Renders the hero section of the page
 */
export default class HeroSection extends Component {
  view() {
    // Get settings or fall back to translations if not set
    const locale = app.translator.getLocale() || 'en';
    const title = app.forum.attribute(`hero_title_${locale}`) || app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    const description = app.forum.attribute(`hero_description_${locale}`) || app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');

    return (
      <div className="HeroSection">
        <div className="container">
          <h1 className="HeroSection-title">{title}</h1>
          <p className="HeroSection-subtitle">{description}</p>
        </div>
      </div>
    );
  }
}
