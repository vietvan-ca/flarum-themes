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
  protected $settings;
  protected $filesystem;

  public function __construct(SettingsRepositoryInterface $settings, Factory $filesystem)
  {
    $this->settings = $settings;
    $this->filesystem = $filesystem;
  }

  public function handle(ServerRequestInterface $request): ResponseInterface
  {
    $actor = $request->getAttribute('actor');

    if (!$actor->isAdmin()) {
      return new EmptyResponse(403);
    }

    $settingKey = 'vietvan_ca_hero_background_image_path';
    $path = $this->settings->get($settingKey);

    if ($path) {
      $disk = $this->filesystem->disk('flarum-assets');

      if ($disk->exists($path)) {
        $disk->delete($path);
      }

      $this->settings->delete($settingKey);
    }

    return new EmptyResponse(204); // No content
  }
}
