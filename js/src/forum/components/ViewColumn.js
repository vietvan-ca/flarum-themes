import Component from 'flarum/common/Component';

/**
 * Renders the view count column
 */
export default class ViewColumn extends Component {
  view() {
    const discussion = this.attrs.discussion;
    const viewCount = discussion.attribute('views') || 0;
    
    return m('div.discussion-view', [
      m('span', viewCount)
    ]);
  }
}