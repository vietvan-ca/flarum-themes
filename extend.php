<?php

namespace VietVan\FlarumThemes;

use Flarum\Extend;
use VietVan\FlarumThemes\Extend\DiscussionAttributes;

return [
    // Register the forum interface
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    // Register localization files
    (new Extend\Locales(__DIR__ . '/locale')),

    // Register custom attributes for discussions
    DiscussionAttributes::extend(),

];
