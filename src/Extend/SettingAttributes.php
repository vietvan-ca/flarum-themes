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
      ->serializeToForum('hero_title_en', 'vietvan-ca-themes.hero_title_en')
      ->serializeToForum('hero_title_vi', 'vietvan-ca-themes.hero_title_vi')
      ->serializeToForum('hero_description_en', 'vietvan-ca-themes.hero_description_en')
      ->serializeToForum('hero_description_vi', 'vietvan-ca-themes.hero_description_vi')
      ->serializeToForum('vietvan_ca_hero_background_imageUrl', 'vietvan_ca_hero_background_image_path', AddHeroImageUrlToApi::class);
  }
}
