import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';


/**
 * Renders the header for the discussion list
 */

export default class DiscussionListHeader extends Component {
  view() {
    return (
      <li className="CustomDiscussionList-header">
        <div className="DiscussionListItem-info topic">
          {app.translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.topic')}
        </div>
        <div className="DiscussionListItem-info replies">
          {app.translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.replies')}
        </div>
        <div className="DiscussionListItem-info views">
          {app.translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.views')}
        </div>
        <div className="DiscussionListItem-info activity">
          {app.translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.activity')}
        </div>
      </li>
    );
  }
}
