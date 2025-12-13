import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import LogInModal from 'flarum/forum/components/LogInModal';
import LinkButton from 'flarum/common/components/LinkButton';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/common/components/Button';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import listItems from 'flarum/common/helpers/listItems';

export default class CustomMobileDiscussionToolbar extends Component {
  view() {
    return (
      <div className="CustomMobileDiscussionToolbar">
        {/* Toggle Discussion List Button */}
        <div className="CustomMobileDiscussionToolbar-left">
          <span className="CustomMobileDiscussionToolbar-date">{this.currentDate}</span>
          {SelectDropdown.component(
            {
              buttonClassName: 'Button Button--text',
              className: 'App-titleControl',
            },
            this.getNavigationItems().toArray()
          )}
        </div>

        {/* Start Discussion Button */}
        <button
          class="Button Button--primary CustomMobileDiscussionToolbar-button"
          type="button"
          aria-label="Start Discussion"
          onclick={() => this.newDiscussionAction()}
        >
          <i aria-hidden="true" class="icon fas fa-edit Button-icon"></i>
          <span class="Button-label">
            {app.translator.trans('core.forum.index.start_discussion_button')}
          </span>
        </button>
      </div>
    );
  }

  getNavigationItems() {
    const items = new ItemList();

    // All Discussions
    items.add(
      'all-discussions',
      LinkButton.component(
        {
          href: app.route('index'),
          icon: 'fas fa-comments',
        },
        app.translator.trans('core.forum.index.all_discussions_link')
      ),
      100
    );

    // Tags
    items.add(
      'tags',
      LinkButton.component(
        {
          href: app.route('tags'),
          icon: 'fas fa-th-large',
        },
        app.translator.trans('flarum-tags.forum.index.tags_link')
      ),
      90
    );

    // Get all tags from the store
    const allTags = app.store.all('tags');

    if (allTags && allTags.length > 0) {
      // Filter and sort primary tags
      const primaryTags = allTags
        .filter((tag) => {
          // Only show primary tags (no parent)
          const hasParent = tag.parent && tag.parent();
          const position = tag.position();
          // Include tags that don't have a parent and have a position
          return !hasParent && position !== null && position !== undefined;
        })
        .sort((a, b) => a.position() - b.position());

      // Add each tag to the dropdown
      primaryTags.forEach((tag, index) => {
        items.add(
          `tag-${tag.id()}`,
          LinkButton.component(
            {
              href: app.route('tag', { tags: tag.slug() }),
              icon: 'fas fa-circle',
              style: tag.color() ? { color: tag.color() } : {},
            },
            tag.name()
          ),
          80 - index
        );
      });
    }

    return items;
  }

  newDiscussionAction() {
    return new Promise((resolve, reject) => {
      if (app.session.user) {
        app.composer.load(DiscussionComposer, { user: app.session.user });
        app.composer.show();

        return resolve(app.composer);
      } else {
        app.modal.show(LogInModal);

        return reject();
      }
    });
  }
}
