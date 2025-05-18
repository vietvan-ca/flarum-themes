import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import UploadImageButton from 'flarum/admin/components/UploadImageButton';
import Switch from 'flarum/common/components/Switch';

const locales = ['en', 'vi']; // whatever locales you support

export default class ThemeSettingsPage extends ExtensionPage {
  content() {
    // Get the current status of the hero banner toggle
    const isHeroBannerEnabled = this.setting('vietvan-ca-themes.hero_banner_enabled')() === '1';

    return (
      <div className="ThemeSettingsPage">
        <div className="container ThemeSettingsPage-container">
          <h2 className="ThemeSettingsPage-title">{app.translator.trans('vietvan-ca-flarum-themes.admin.settings.title')}</h2>

          <div className="Form ThemeSettingsPage-form">
            <div className="ThemeSettingsPage-section">
              <h3>{app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title')}</h3>

              {/* Toggle for enabling/disabling the Hero Banner */}
              <div className="Form-group">
                <Switch
                  state={isHeroBannerEnabled}
                  onchange={(value) => {
                    this.setting('vietvan-ca-themes.hero_banner_enabled')(value ? '1' : '0');
                  }}
                >
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-banner-label') || 'Enable Hero Banner'}
                </Switch>
                <div className="helpText">
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-banner-help') ||
                    'Toggle this option to enable or disable the hero banner section.'}
                </div>
              </div>

              {/* Show the hero banner configuration only if the banner is enabled */}
              {isHeroBannerEnabled && (
                <div className="ThemeSettingsPage-heroConfig">
                  <div className="Form-group ThemeSettingsPage-imageUpload">
                    <label>
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-label') || 'Hero Background Image'}
                    </label>
                    <div className="ThemeSettingsPage-imageContainer">
                      <UploadImageButton name="vietvan_ca_hero_background_image" className="ThemeSettingsPage-uploadButton" />
                    </div>
                    <div className="helpText">
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-help') ||
                        'Upload an image to be displayed as the hero section background.'}
                    </div>
                  </div>

                  {/* Toggle for showing/hiding title and description when banner image exists */}
                  <div className="Form-group">
                    <Switch
                      state={this.setting('vietvan-ca-themes.show_hero_text')() !== '0'}
                      onchange={(value) => {
                        this.setting('vietvan-ca-themes.show_hero_text')(value ? '1' : '0');
                      }}
                    >
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.show-text-label') || 'Show Title and Description on Banner'}
                    </Switch>
                    <div className="helpText">
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.show-text-help') ||
                        'When enabled, the title and description will be displayed on top of the banner image.'}
                    </div>
                  </div>

                  <div className="ThemeSettingsPage-grid">
                    {locales.map((code) => (
                      <div className="Form-group ThemeSettingsPage-formGroup" key={code}>
                        <label>{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.title-${code}-label`)}</label>
                        <input className="FormControl" type="text" bidi={this.setting(`vietvan-ca-themes.hero_title_${code}`)} />
                        <div className="helpText">
                          {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder`)}
                          {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.title-${code}-default`)}
                        </div>
                      </div>
                    ))}

                    {locales.map((code) => (
                      <div className="Form-group ThemeSettingsPage-formGroup" key={`desc-${code}`}>
                        <label>{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.description-${code}-label`)}</label>
                        <textarea
                          className="FormControl ThemeSettingsPage-textarea"
                          bidi={this.setting(`vietvan-ca-themes.hero_description_${code}`)}
                        />
                        <div className="helpText">
                          {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder`)}
                          {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.description-${code}-default`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ThemeSettingsPage-footer">{this.submitButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}
