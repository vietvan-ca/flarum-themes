import app from 'flarum/admin/app';
import ThemeSettingsPage from './components/ThemeSettingsPage';

app.initializers.add('vietvan-ca-themes', () => {
  app.extensionData
    .for('vietvan-ca-themes')
    .registerPage(ThemeSettingsPage);
});