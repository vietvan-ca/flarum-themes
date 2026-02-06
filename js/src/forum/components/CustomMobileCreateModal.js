import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LogInModal from 'flarum/forum/components/LogInModal';
import ItemList from 'flarum/common/utils/ItemList';
import TextEditor from 'flarum/common/components/TextEditor';

/**
 * Custom Mobile Create Topic Modal
 * A full-page mobile-optimized modal for creating new topics
 */
export default class CustomMobileCreateModal extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    
    this.title = '';
    this._content = '';
    this.selectedTag = '';
    this.isSubmitting = false;
    this.editor = null;
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
            <label>Chọn chủ đề (tùy chọn):</label>
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

          {/* Content Editor - Simple textarea instead of TextEditor to avoid rendering issues */}
          <div className="form-group">
            <label>Nội dung (tùy chọn):</label>
            <textarea 
              className="FormControl"
              placeholder="Viết nội dung bài viết (không bắt buộc)..."
              value={this.getContent()}
              oninput={(e) => this.setContent(e.target.value)}
              rows="10"
            />
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

  getContent() {
    // Use stored content value
    return this._content || '';
  }

  setContent(value) {
    // Store the content value
    this._content = value;
  }

  canSubmit() {
    return this.title.trim() && 
           app.session.user && 
           app.forum.attribute('canStartDiscussion');
  }

  isVisible() {
    return document.body.classList.contains('mobile-create-modal-open');
  }

  show() {
    if (window.innerWidth <= 768) {
      // Check if user can start discussions
      if (!app.session.user) {
        app.modal.show(LogInModal);
        return;
      }
      
      if (!app.forum.attribute('canStartDiscussion')) {
        if (app.alerts) {
          app.alerts.show({ type: 'error' }, 'Bạn không có quyền tạo chủ đề mới');
        }
        return;
      }
      
      document.body.classList.add('mobile-create-modal-open');
      
      // Hide any existing Flarum composer
      const composer = document.querySelector('#composer');
      if (composer) {
        composer.style.display = 'none';
      }
      
      m.redraw();
    }
  }

  hide() {
    document.body.classList.remove('mobile-create-modal-open');
    this.title = '';
    this._content = '';
    this.setContent('');
    this.selectedTag = '';
    this.isSubmitting = false;
    m.redraw();
  }

  submit() {
    if (!this.canSubmit() || this.isSubmitting) return;

    this.isSubmitting = true;
    m.redraw();

    // Use Flarum's request system to submit data
    const requestData = {
      data: {
        type: 'discussions',
        attributes: {
          title: this.title,
          content: this.getContent().trim() || ' ' // Ensure there's at least a space if content is empty
        }
      }
    };

    // Add tags relationship if selected
    if (this.selectedTag) {
      requestData.data.relationships = {
        tags: {
          data: [{ type: 'tags', id: this.selectedTag }]
        }
      };
    }

    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/discussions',
      body: requestData
    }).then((response) => {
      // Success - navigate to the new discussion  
      const discussion = app.store.pushPayload(response);
      window.location.href = app.route.discussion(discussion);
      this.hide();
    }).catch((error) => {
      // Error handling
      console.error('Failed to create discussion:', error);
      
      // Show error message
      let errorMessage = 'Có lỗi xảy ra khi đăng bài';
      if (error && error.errors && error.errors.length > 0) {
        errorMessage = error.errors[0].detail || errorMessage;
      }
      
      if (app.alerts) {
        app.alerts.show({ type: 'error' }, errorMessage);
      } else {
        alert(errorMessage);
      }
    }).finally(() => {
      this.isSubmitting = false;
      m.redraw();
    });
  }

  static show() {
    // Only on mobile
    if (window.innerWidth > 768) return;
    
    // Hide any existing Flarum composer immediately 
    const composer = document.querySelector('#composer');
    if (composer) {
      composer.style.display = 'none';
    }

    // Mount the component if not already mounted
    let container = document.querySelector('#mobile-create-modal-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'mobile-create-modal-container';
      document.body.appendChild(container);
      m.mount(container, CustomMobileCreateModal);
    }

    // Show the modal
    document.body.classList.add('mobile-create-modal-open');
    m.redraw();
  }

  static hide() {
    document.body.classList.remove('mobile-create-modal-open');
    m.redraw();
  }
}