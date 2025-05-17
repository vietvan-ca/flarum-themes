<?php

namespace VietVan\FlarumThemes\Extend;

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
      ->serializeToForum('heroTitle_en',       'vietvanCaFlarumThemes.heroTitle_en')
      ->serializeToForum('heroTitle_vi',       'vietvanCaFlarumThemes.heroTitle_vi')
      ->serializeToForum('heroDescription_en', 'vietvanCaFlarumThemes.heroDescription_en')
      ->serializeToForum('heroDescription_vi', 'vietvanCaFlarumThemes.heroDescription_vi');
  }
}
