<?php

namespace VietVan\FlarumThemes\Extend;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Extend\ApiSerializer;
use Illuminate\Database\Eloquent\Collection;

/**
 * This class extends the DiscussionSerializer to add custom attributes to the discussion.
 * It adds the latest post authors and view count to the discussion attributes.
 */
class DiscussionAttributes
{
    public static function extend(): ApiSerializer
    {
        return (new ApiSerializer(DiscussionSerializer::class))
            ->attributes(function ($serializer, Discussion $discussion, array $attributes) {
                $latestPosts = $discussion->posts()
                    ->whereNotNull('user_id')
                    ->orderBy('created_at', 'desc')
                    ->with('user')
                    ->limit(6)
                    ->get();

                $latestPosters = $latestPosts
                    ->map(fn($post) => $post->user)
                    ->unique('id')
                    ->values();

                $attributes['latestPosters'] = $latestPosters;

                return $attributes;
            });
    }
}
