import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class Logo extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    let logoUrl = app.forum.attribute('vietvan_ca_logoUrl');
    const darkLogoUrl = app.forum.attribute('vietvan_ca_logo_darkUrl');

    const isAdminDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
    if (isAdminDark && darkLogoUrl) {
      logoUrl = darkLogoUrl;
    }

    if (!logoUrl && darkLogoUrl) {
      logoUrl = darkLogoUrl;
    }

    if (!logoUrl) {
      return null;
    }

    return (
      <Link href={app.route('dashboard')} className="Header-logo CustomHeaderLogo">
        <img src={logoUrl} alt={app.forum.attribute('title') + ' Admin Logo'} />
      </Link>
    );
  }
}
