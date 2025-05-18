<?php

namespace VietVan\FlarumThemes;

use Flarum\Extend;
use VietVan\FlarumThemes\Api\Controllers\UploadHeroBackgroundController;
use VietVan\FlarumThemes\Api\Controllers\DeleteHeroBackgroundController;
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
        ->delete('/vietvan_ca_hero_background_image', 'vietvan-ca-themes.delete', DeleteHeroBackgroundController::class),

    // Register extensions
    DiscussionAttributes::extend(),
    SettingAttributes::extend(),


];
