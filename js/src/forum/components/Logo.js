import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

export default class Logo extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.mode = app.session.user?.preferences().fofNightMode === 2 ? 'dark' : 'light';
    
    if (flarum.extensions['fof-nightmode']) {
      this.setupNightModeListener();
    }
  }

  setupNightModeListener() {
    document.addEventListener('fofnightmodechange', (event) => {
      this.mode = event.detail === 'day' ? 'light' : 'dark';
      m.redraw();
    });
  }

  view() {
    const logoAttr = this.mode === 'dark' ? 'vietvan_ca_logo_darkUrl' : 'vietvan_ca_logoUrl';
    const logoUrl = app.forum.attribute(logoAttr);

    if (!logoUrl) return null;

    const customUrl = app.forum.attribute('vietvan_ca_back_button_custom_url') || app.route('index');

    return (
      <a href={customUrl} className="Header-logo CustomHeaderLogo">
        <img src={logoUrl} alt={'VietVan CA'} />
      </a>
    );
  }
}
