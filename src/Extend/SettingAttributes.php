<?php

namespace VietVan\FlarumThemes\Extend;

use VietVan\FlarumThemes\AddHeroImageUrlToApi;


use Flarum\Extend;

class SettingAttributes
{
    /**
     * Expose your admin settings into the forum JS payload
     *
     * @return Extend\Settings
     */
    public static function extend(): Extend\Settings
    {
        return (new Extend\Settings)
            ->serializeToForum('vietvan_ca_hero_enabled', 'vietvan-ca-themes.hero_banner_enabled')
            ->serializeToForum('vietvan_ca_hero_show_text', 'vietvan-ca-themes.show_hero_text')
            ->serializeToForum('vietvan_ca_hero_title_en', 'vietvan-ca-themes.hero_title_en')
            ->serializeToForum('vietvan_ca_hero_title_vi', 'vietvan-ca-themes.hero_title_vi')
            ->serializeToForum('vietvan_ca_hero_description_en', 'vietvan-ca-themes.hero_description_en')
            ->serializeToForum('vietvan_ca_hero_description_vi', 'vietvan-ca-themes.hero_description_vi')
            ->serializeToForum('vietvan_ca_hero_background_imageUrl', 'vietvan_ca_hero_background_image_path', AddHeroImageUrlToApi::class)
            ->serializeToForum('vietvan_ca_hero_background_image_darkUrl', 'vietvan_ca_hero_background_image_dark_path', AddHeroImageUrlToApi::class);
    }
}
