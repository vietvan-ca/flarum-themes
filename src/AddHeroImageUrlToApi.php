<?php

namespace VietVan\FlarumThemes;

use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Cloud;

class AddHeroImageUrlToApi
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Cloud
     */
    protected $uploadDir;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(SettingsRepositoryInterface $settings, UrlGenerator $url, Factory $filesystemFactory)
    {
        $this->settings = $settings;
        $this->url = $url;
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    public function __invoke()
    {
        $settingKey = 'vietvan_ca_hero_background_image_path';
        $imagePath = $this->settings->get($settingKey);

        return $imagePath ? $this->uploadDir->url($imagePath) : null;
    }
}
