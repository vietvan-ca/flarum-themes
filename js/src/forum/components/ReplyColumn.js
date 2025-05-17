import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

/**
 * Renders the reply count column
 */
export default class ReplyColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const replyCount = discussion.replyCount() ?? 0;

    return m('div.discussion-reply', [
      m('span', replyCount),
    ]);
  }
}
