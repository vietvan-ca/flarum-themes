
import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export default class BackButton extends Component {
  view() {
    const customUrl = app.forum.attribute('vietvan_ca_back_button_custom_url');
    if (!customUrl || customUrl.trim() === '') {
      // If no custom URL is set, do not render the button
      return null;
    }

    return (
      <Button
        className="Button Button--link Header-back"
        icon="fas fa-chevron-left"
        onclick={this.goBack.bind(this)}
        title={app.translator.trans('vietvan-ca-flarum-themes.forum.header.back_button_tooltip')} 
      >
        {app.translator.trans('vietvan-ca-flarum-themes.forum.header.back_button_text') || 'Back'}
      </Button>
    );
  }

  goBack() {
    const customUrl = app.forum.attribute('vietvan_ca_back_button_custom_url');

    if (customUrl && customUrl.trim() !== '') {
      // Check if the custom URL is a valid URL
      if (customUrl.startsWith('http://') || customUrl.startsWith('https://') || customUrl.startsWith('//')) {
        window.location.href = customUrl; // For external URLs
      } else {
        window.location.href = app.forum.attribute('baseUrl') + customUrl; // For internal URLs
      }
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/' // Fallback to home if no history or custom URL is set
    }
  }
}