import Component from 'flarum/common/Component';
import { getTimeSince } from '../utils/discussionHelpers';

/**
 * Renders the activity column with time since last post and active users
 */
export default class ActivityColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const lastPostedAt = discussion.lastPostedAt();
    const timeSince = lastPostedAt ? getTimeSince(new Date(lastPostedAt)) : '';

    return m('div.discussion-activity', [m('span', timeSince)]);
  }
}
