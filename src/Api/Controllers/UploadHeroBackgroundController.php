<?php

namespace VietVan\FlarumThemes\Api\Controllers;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Illuminate\Support\Arr;

class UploadHeroBackgroundController implements RequestHandlerInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Factory
     */
    protected $filesystem;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param Factory $filesystem
     */
    public function __construct(SettingsRepositoryInterface $settings, Factory $filesystem)
    {
        $this->settings = $settings;
        $this->filesystem = $filesystem;
    }

    /**
     * Handle the request and return a response.
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = $request->getAttribute('actor');

        if (!$actor->isAdmin()) {
            return new JsonResponse(['error' => 'Permission denied'], 403);
        }

        // Get upload name from the request
        $uploadedFiles = $request->getUploadedFiles();

        // Determine which image is being uploaded based on the input name
        $uploadName = '';
        $settingKey = '';

        if (isset($uploadedFiles['vietvan_ca_hero_background_image'])) {
            $uploadName = 'vietvan_ca_hero_background_image';
            $settingKey = 'vietvan_ca_hero_background_image_path';
        } elseif (isset($uploadedFiles['vietvan_ca_hero_background_image_dark'])) {
            $uploadName = 'vietvan_ca_hero_background_image_dark';
            $settingKey = 'vietvan_ca_hero_background_image_dark_path';
        } else {
            return new JsonResponse(['error' => 'No valid upload found'], 400);
        }

        $uploadedFile = Arr::get($uploadedFiles, $uploadName);

        if (!$uploadedFile || $uploadedFile->getError() !== UPLOAD_ERR_OK) {
            return new JsonResponse(['error' => 'Upload failed'], 400);
        }

        // Create temporary file
        $tmpFile = tempnam(sys_get_temp_dir(), 'hero_bg_');
        $stream = $uploadedFile->getStream()->detach();
        file_put_contents($tmpFile, stream_get_contents($stream));

        // Get file extension from original filename
        $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
        if (!in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
            return new JsonResponse(['error' => 'Invalid file type'], 400);
        }

        // Generate unique filename with mode identifier
        $mode = strpos($uploadName, 'dark') !== false ? 'dark' : 'light';
        $path = "vietvan_ca_hero_bg_{$mode}_" . time() . "." . $extension;

        // Store file
        $disk = $this->filesystem->disk('flarum-assets');
        $disk->put($path, file_get_contents($tmpFile));

        // Clean up temp file
        unlink($tmpFile);

        // Save path to settings
        $this->settings->set($settingKey, $path);

        return new JsonResponse(['url' => $disk->url($path)]);
    }
}
