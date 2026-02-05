import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import ItemList from 'flarum/common/utils/ItemList';

/**
 * Custom Mobile Create Topic Modal
 * A full-page mobile-optimized modal for creating new topics
 */
export default class CustomMobileCreateModal extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    
    this.title = '';
    this.content = '';
    this.selectedTag = '';
    this.isSubmitting = false;
  }

  view() {
    if (window.innerWidth > 768) return null; // Desktop only shows default composer

    return (
      <div className={`CustomMobileCreateModal ${this.isVisible() ? 'visible' : ''} ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
        {/* Header */}
        <div className="CustomMobileCreateModal-header">
          <h2>Tạo chủ đề mới</h2>
          <button 
            className="close-btn"
            onclick={() => this.hide()}
            type="button"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="CustomMobileCreateModal-content">
          {/* Tags Selection */}
          <div className="form-group">
            <label>Chọn chủ đề:</label>
            <select 
              value={this.selectedTag}
              onchange={(e) => { this.selectedTag = e.target.value; }}
            >
              <option value="">-- Chọn chủ đề --</option>
              {this.getTagOptions()}
            </select>
          </div>

          {/* Title Input */}
          <div className="form-group">
            <label>Tiêu đề:</label>
            <input 
              type="text" 
              placeholder="Nhập tiêu đề bài viết..."
              value={this.title}
              oninput={(e) => { this.title = e.target.value; }}
            />
          </div>

          {/* Content Textarea */}
          <div className="form-group">
            <label>Nội dung:</label>
            <textarea 
              placeholder="Viết nội dung bài viết..."
              value={this.content}
              oninput={(e) => { this.content = e.target.value; }}
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="CustomMobileCreateModal-footer">
          <button 
            className="submit-btn"
            onclick={() => this.submit()}
            disabled={this.isSubmitting || !this.canSubmit()}
            type="button"
          >
            {this.isSubmitting ? 'Đang đăng...' : 'Đăng'}
          </button>
        </div>
      </div>
    );
  }

  getTagOptions() {
    const tags = app.store.all('tags');
    return tags
      .filter(tag => !tag.parent() && tag.canStartDiscussion())
      .map(tag => (
        <option value={tag.id()}>{tag.name()}</option>
      ));
  }

  canSubmit() {
    return this.title.trim() && this.content.trim() && this.selectedTag;
  }

  isVisible() {
    return document.body.classList.contains('mobile-create-modal-open');
  }

  show() {
    if (window.innerWidth <= 768) {
      document.body.classList.add('mobile-create-modal-open');
      m.redraw();
    }
  }

  hide() {
    document.body.classList.remove('mobile-create-modal-open');
    this.title = '';
    this.content = '';
    this.selectedTag = '';
    m.redraw();
  }

  submit() {
    if (!this.canSubmit() || this.isSubmitting) return;

    this.isSubmitting = true;
    m.redraw();

    // Create discussion using Flarum API store
    const data = {
      title: this.title,
      content: this.content
    };

    // Add tags if selected
    if (this.selectedTag) {
      data.relationships = {
        tags: {
          data: [{ type: 'tags', id: this.selectedTag }]
        }
      };
    }

    app.store.createRecord('discussions', data).save().then((discussion) => {
      // Success - navigate to the new discussion
      app.history.pushState(null, app.translator.trans('core.forum.discussion.title'), app.route.discussion(discussion));
      window.location.href = app.route.discussion(discussion);
      this.hide();
    }).catch((error) => {
      // Error handling
      console.error('Failed to create discussion:', error);
      if (app.alerts) {
        app.alerts.show({ type: 'error' }, app.translator.trans('core.forum.composer.submit_error_message') || 'Có lỗi xảy ra khi đăng bài');
      }
    }).finally(() => {
      this.isSubmitting = false;
      m.redraw();
    });
  }

  static show() {
    // Mount the component if not already mounted
    if (!document.querySelector('.CustomMobileCreateModal')) {
      const container = document.createElement('div');
      container.id = 'mobile-create-modal-container';
      document.body.appendChild(container);
      m.mount(container, CustomMobileCreateModal);
    }

    // Show the modal
    const instance = document.querySelector('.CustomMobileCreateModal');
    if (instance) {
      document.body.classList.add('mobile-create-modal-open');
      m.redraw();
    }
  }

  static hide() {
    document.body.classList.remove('mobile-create-modal-open');
    m.redraw();
  }
}