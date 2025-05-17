import Component from 'flarum/common/Component';

/**
 * Renders the hero section of the page
 */

export default class HeroSection extends Component {
  view() {
    return (
      <div className="HeroSection">
        <div className="container">
          <h1 className="HeroSection-title"> {app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title')}</h1>
          <p className="HeroSection-subtitle">{app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description')}</p>
        </div>
      </div>
    );
  }
}
