<?php

namespace VietVan\FlarumThemes;

use Flarum\Extend;
use VietVan\FlarumThemes\Api\Controllers\UploadHeroBackgroundController;
use VietVan\FlarumThemes\Api\Controllers\DeleteHeroBackgroundController;
use VietVan\FlarumThemes\Api\Controllers\UploadLogoController;
use VietVan\FlarumThemes\Api\Controllers\DeleteLogoController;
use VietVan\FlarumThemes\Extend\DiscussionAttributes;
use VietVan\FlarumThemes\Extend\SettingAttributes;

return [
    // Register the forum interface
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    // Register the admin interface
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    // Register localization files
    (new Extend\Locales(__DIR__ . '/locale')),

    // Register the API routes
    (new Extend\Routes('api'))
        ->post('/vietvan_ca_hero_background_image', 'vietvan-ca-themes.upload', UploadHeroBackgroundController::class)
        ->post('/vietvan_ca_hero_background_image_dark', 'vietvan-ca-themes.dark.upload', UploadHeroBackgroundController::class)
        ->delete('/vietvan_ca_hero_background_image', 'vietvan-ca-themes.delete', DeleteHeroBackgroundController::class)
        ->delete('/vietvan_ca_hero_background_image_dark', 'vietvan-ca-themes.dark.delete', DeleteHeroBackgroundController::class)
        ->post('/vietvan_ca_logo', 'vietvan-ca-themes.logo.upload', UploadLogoController::class)
        ->post('/vietvan_ca_logo_dark', 'vietvan-ca-themes.logo.dark.upload', UploadLogoController::class)
        ->delete('/vietvan_ca_logo', 'vietvan-ca-themes.logo.delete', DeleteLogoController::class)
        ->delete('/vietvan_ca_logo_dark', 'vietvan-ca-themes.logo.dark.delete', DeleteLogoController::class),

    // Register extensions
    DiscussionAttributes::extend(),
    SettingAttributes::extend(),
];
