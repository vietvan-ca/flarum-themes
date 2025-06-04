import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class Logo extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    // pick light vs dark background
    const mode = app.session.user?.preferences().fofNightMode === 2 ? 'dark' : 'light';
    const logoAttr = mode === 'dark' ? 'vietvan_ca_logo_darkUrl' : 'vietvan_ca_logoUrl';
    const logoUrl = app.forum.attribute(logoAttr);

    if (!logoUrl) return null; 

    return (
      <Link href={app.route('index')} className="Header-logo CustomHeaderLogo">
        <img
          src={logoUrl}
          alt={'VietVan CA'}
        />
      </Link>
    );
  }
}