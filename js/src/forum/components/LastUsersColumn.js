import Component from 'flarum/common/Component';
import { renderUserAvatar } from '../utils/discussionHelpers';

/**
 * Renders the activity column with time since last post and active users
 */
export default class LastUsersColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const latestPosters = discussion.attribute('latestPosters') || [];
    
    return m('div.discussion-users', [
      m('div.active-users', latestPosters.slice(0, 5).map((user, i) => 
        renderUserAvatar(user, i)
      ))
    ]);
  }
}