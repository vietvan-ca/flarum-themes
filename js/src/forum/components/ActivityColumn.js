import Component from 'flarum/common/Component';
import { getTimeSince, renderUserAvatar } from '../utils/discussionHelpers';

/**
 * Renders the activity column with time since last post and active users
 */
export default class ActivityColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const lastPostedAt = discussion.lastPostedAt();
    const timeSince = lastPostedAt ? getTimeSince(new Date(lastPostedAt)) : '';
    const latestPosters = discussion.attribute('latestPosters') || [];
    
    return m('div.discussion-work', [
      m('div.time-since', timeSince),
      m('div.active-users', latestPosters.slice(0, 5).map((user, i) => 
        renderUserAvatar(user, i)
      ))
    ]);
  }
}