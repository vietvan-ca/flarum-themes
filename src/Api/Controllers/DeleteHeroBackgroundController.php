<?php

namespace VietVan\FlarumThemes\Api\Controllers;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Laminas\Diactoros\Response\EmptyResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteHeroBackgroundController implements RequestHandlerInterface
{
    /** @var SettingsRepositoryInterface */
    protected $settings;

    /** @var \Illuminate\Contracts\Filesystem\Filesystem */
    protected $disk;

    public function __construct(SettingsRepositoryInterface $settings, Factory $filesystem)
    {
        $this->settings = $settings;
        // both light & dark uploads live on the same disk
        $this->disk = $filesystem->disk('flarum-assets');
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');
        if (! $actor->isAdmin()) {
            return new EmptyResponse(403);
        }

        // figure out if this was the “dark” endpoint
        $path = $request->getUri()->getPath();
        $isDark = str_ends_with($path, '_dark');

        // choose the matching setting key
        $settingKey = $isDark
            ? 'vietvan_ca_hero_background_image_dark_path'
            : 'vietvan_ca_hero_background_image_path';

        // delete the file if it exists
        $file = $this->settings->get($settingKey);
        if ($file && $this->disk->exists($file)) {
            $this->disk->delete($file);
        }

        // clear the setting
        $this->settings->delete($settingKey);

        return new EmptyResponse(204);
    }
}
