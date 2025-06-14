import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import UploadImageButton from 'flarum/admin/components/UploadImageButton';
import Switch from 'flarum/common/components/Switch';

const locales = ['en', 'vi'];

export default class ThemeSettingsPage extends ExtensionPage {
  content() {
    // Get the current status of the hero banner toggle
    const isHeroBannerEnabled = this.setting('vietvan-ca-themes.hero_banner_enabled')() === '1';
    const isTextVisible = this.setting('vietvan-ca-themes.show_hero_text')() === '1';
    const isCustomColorEnabled = this.setting('vietvan-ca-themes.hero_custom_color_enabled')() === '1'; // State for custom color switch

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
                  {/* Light Hero Banner */}
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

                  {/* Dark Hero Banner */}
                  <div className="Form-group ThemeSettingsPage-imageUpload">
                    <label>
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-dark-label') || 'Hero Background Image'}
                    </label>
                    <div className="ThemeSettingsPage-imageContainer">
                      <UploadImageButton name="vietvan_ca_hero_background_image_dark" className="ThemeSettingsPage-uploadButton" />
                    </div>
                    <div className="helpText">
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-dark-help') ||
                        'Upload an image to be displayed as the hero section background.'}
                    </div>
                  </div>

                  {/* Toggle for showing/hiding title and description when banner image exists */}
                  <div className="Form-group">
                    <Switch
                      state={isTextVisible}
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

                   {/* New switch for enabling custom colors */}
                  <div className="Form-group">
                    <Switch
                      state={isCustomColorEnabled}
                      onchange={(value) => {
                        this.setting('vietvan-ca-themes.hero_custom_color_enabled')(value ? '1' : '0');
                      }}
                    >
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-custom-color-label') || 'Enable Custom Text Colors'}
                    </Switch>
                    <div className="helpText">
                      {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-custom-color-help') || 'If disabled, default theme colors will be used.'}
                    </div>
                  </div>
                  {/* New switch */}

                  {/* Conditional rendering for color pickers */}
                  {isCustomColorEnabled && (
                    <div className="ThemeSettingsPage-grid">
                      <div className="Form-group">
                        <label>{app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title-color-label') || 'Title Text Color'}</label>
                        <input
                          className="FormControl"
                          type="color"
                          bidi={this.setting('vietvan-ca-themes.hero_title_color')}
                          />
                        <div className="helpText">
                          {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title-color-help') || 'Choose a color for the hero banner title text.'}
                        </div>
                      </div>
                      <div className="Form-group">
                        <label>{app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.description-color-label') || 'Description Text Color'}</label>
                        <input
                          className="FormControl"
                          type="color"
                          bidi={this.setting('vietvan-ca-themes.hero_description_color')}
                        />
                        <div className="helpText">
                          {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.description-color-help') || 'Choose a color for the hero banner description text.'}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Conditional rendering */}

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

            {/* New section for Header setting */}
            <div className="ThemeSettingsPage-section">
              <h3>{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.header.title`)}</h3>

              <div className="Form-group">
                <Switch
                  state={this.setting('vietvan-ca-themes.show_register_button')() === '1'}
                  onchange={(value) => {
                    this.setting('vietvan-ca-themes.show_register_button')(value ? '1' : '0');
                  }}
                >
                  {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.header.show-register-button-label`)}
                </Switch>
                <div className="helpText">{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.header.show-register-button-help`)}</div>
              </div>

              <div className="Form-group">
                <label>
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-label')}
                </label>
                <input
                  className="FormControl"
                  type="text"
                  bidi={this.setting('vietvan-ca-themes.back_button_custom_url')}
                  placeholder={app.translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-placeholder')}
                />
                <div className="helpText">
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-help')}
                </div>
              </div>
            </div>

            {/* New Section for Logo Settings */}
            <div className="ThemeSettingsPage-section">
              <h3>{app.translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.title')}</h3>

              <div className="Form-group ThemeSettingsPage-imageUpload">
                <label>
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-light-label')}
                </label>
                <div className="ThemeSettingsPage-imageContainer">
                  {/* Flarum saves this as 'vietvan-ca-themes.logo_light_path_setting' if name is 'logo_light_path_setting' */}
                  <UploadImageButton name="vietvan_ca_logo" />
                </div>
                <div className="helpText">
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-light-help')}
                </div>
              </div>

              <div className="Form-group ThemeSettingsPage-imageUpload">
                <label>
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-dark-label')}
                </label>
                <div className="ThemeSettingsPage-imageContainer">
                  <UploadImageButton name="vietvan_ca_logo_dark" />
                </div>
                <div className="helpText">
                  {app.translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-dark-help')}
                </div>
              </div>
            </div>

            
            <div className="ThemeSettingsPage-footer">{this.submitButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}
