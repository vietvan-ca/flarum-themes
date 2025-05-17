import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

const locales = ['en', 'vi']; // whatever locales you support

export default class ThemeSettingsPage extends ExtensionPage {
  content() {
    return (
      <div className="ThemeSettingsPage">
        <div className="container">
          <div className="Form">
            {locales.map((code) => (
              <div className="Form-group" key={code}>
                <label>{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.title-${code}-label`)}</label>
                <input className="FormControl" type="text" bidi={this.setting(`vietvanCaFlarumThemes.heroTitle_${code}`)} />
                <div className="helpText">
                  {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder`)}
                  {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.title-${code}-default`)}
                </div>
              </div>
            ))}

            {locales.map((code) => (
              <div className="Form-group" key={`desc-${code}`}>
                <label>{app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.description-${code}-label`)}</label>
                <textarea className="FormControl" bidi={this.setting(`vietvanCaFlarumThemes.heroDescription_${code}`)} />
                <div className="helpText">
                  {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder`)}
                  {app.translator.trans(`vietvan-ca-flarum-themes.admin.settings.hero.description-${code}-default`)}
                </div>
              </div>
            ))}

            {this.submitButton()}
          </div>
        </div>
      </div>
    );
  }
}
