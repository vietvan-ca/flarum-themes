import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import TopicColumn from './TopicColumn';
import ReplyColumn from './ReplyColumn';
import ViewColumn from './ViewColumn';
import ActivityColumn from './ActivityColumn';

/**
 * The main row component for discussions in the discussion list
 */
export default class CustomDiscussionRow extends Component {
  view() {
    const discussion = this.attrs.discussion;

    return m(Link, {
      className: 'discussion-row',
      href: app.route.discussion(discussion),
    }, [
      m(TopicColumn, { discussion }),
      m(ReplyColumn, { discussion }),
      m(ViewColumn, { discussion }),
      m(ActivityColumn, { discussion }),
    ]);
  }
}
