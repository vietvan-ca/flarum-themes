import Component from 'flarum/common/Component';
import LinkButton from 'flarum/common/components/LinkButton';
import app from 'flarum/forum/app';

export default class CustomDiscussionTabNavigation extends Component {
  view() {
    const currentSort = app.search.params()?.sort;

    const tabs = [
      { key: 'latest', label: app.translator.trans('core.forum.index_sort.latest_button'), sortParam: '', default: true },
      { key: 'top', label: app.translator.trans('core.forum.index_sort.top_button'), sortParam: 'top' },
      { key: 'newest', label: app.translator.trans('core.forum.index_sort.newest_button'), sortParam: 'newest' },
      { key: 'oldest', label: app.translator.trans('core.forum.index_sort.oldest_button'), sortParam: 'oldest' },
    ];

    return (
      <div className="CustomDiscussionTabNavigation">
        {tabs.map((tab) => {
          let isActive = false;
          if (tab.routeName) {
            isActive = app.current.matches(tab.routeName);
          } else if (tab.isFilter) {
            isActive = app.search.params.q && app.search.params.q.includes(tab.filterParam);
          } else {
            isActive = currentSort === tab.sortParam || (!currentSort && tab.default);
          }

          return (
            <LinkButton className={`SortItem Button Button--link ${isActive ? 'active' : ''}`} onclick={() => this.navigateTo(tab)}>
              {tab.label}
            </LinkButton>
          );
        })}
      </div>
    );
  }

  navigateTo(tab) {
    const params = { ...app.search.params }; // Copy current search parameter

    if (tab.routeName) {
      m.route.set(app.route(tab.routeName));
    } else if (tab.isFilter) {
      params.q = tab.filterParam;
      delete params.sort; // Delete sort if change to specific filter
      m.route.set(app.route(app.current.get('routeName'), params));
    } else {
      params.sort = tab.sortParam;
      delete params.q; // Delete filter 'q' if change to sort
      m.route.set(app.route(app.current.get('routeName'), params));
    }
  }
}
