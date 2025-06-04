<?php

namespace VietVan\FlarumThemes;

use Illuminate\Contracts\Filesystem\Factory;

class AddImageUrlToApi
{
    /**
     * @var \Illuminate\Contracts\Filesystem\Filesystem
     */
    protected $uploadDir;

    public function __construct(Factory $filesystemFactory)
    {
        // 'flarum-assets' is the disk that holds your uploaded images
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    /**
     * @param string|null $path
     * @return string|null
     */
    public function __invoke($path)
    {
        // $path is exactly what you stored in settings for this key
        return $path
            ? $this->uploadDir->url($path)
            : null;
    }
}
