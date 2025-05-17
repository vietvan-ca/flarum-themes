import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import icon from 'flarum/common/helpers/icon';

/**
 * Renders the topic column with title, tags, and excerpt
 */
export default class TopicColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const firstPost = discussion.firstPost();
    const tags = discussion.tags() || [];
    
    // Get sticky and locked status
    const isSticky = discussion.isSticky();
    const isLocked = discussion.isLocked();
    
    return m('div.discussion-topic', [
      m('div.discussion-badges', [
        // Display sticky and locked badges if applicable
        isSticky ? m('span.Badge.Badge--sticky', [
          icon('fas fa-thumbtack')
        ]) : null,
        isLocked ? m('span.Badge.Badge--locked', [
          icon('fas fa-lock'),
        ]) : null,
      ]),
      m('div.discussion-title', [
        m(Link, { 
          href: app.route.discussion(discussion) 
        }, discussion.title())
      ]),
      m('div.discussion-tags', [
        tags.map(tag => m('span.discussion-tag', { 
          className: tag.color() ? 'colored' : '',
          style: tag.color() ? { backgroundColor: tag.color() } : {}
        }, tag.name())),
      ]),
      app.forum.attribute('custom-discussion-list.enable_excerpts') !== false ? 
        m('div.discussion-excerpt', firstPost?.contentPlain() || '') : null
    ]);
  }
}