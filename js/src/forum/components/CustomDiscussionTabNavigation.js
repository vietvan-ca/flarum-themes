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
    // 1. Get the current URL path (e.g., /t/general?sort=newest)
    const currentPath = m.route.get();

    // 2. Remove any existing query parameters by splitting the string at the '?'
    const basePath = currentPath.split('?')[0]; // Result: /t/general

    // 3. Build the new URL path string
    let newPath = basePath;
    if (!tab.default) {
      // Add the sort parameter if this tab is not the default one
      newPath += '?sort=' + tab.sortParam;
    }

    // 4. Use m.route.set() to navigate to the new URL without a full page reload
    m.route.set(newPath);
  }
}
