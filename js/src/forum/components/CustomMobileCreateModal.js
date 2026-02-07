import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LogInModal from 'flarum/forum/components/LogInModal';
import ItemList from 'flarum/common/utils/ItemList';
import TextEditor from 'flarum/common/components/TextEditor';

/**
 * Custom Mobile Create Topic Modal
 * A full-page mobile-optimized modal for creating new topics and replies
 */
export default class CustomMobileCreateModal extends Component {
  // Static properties to store pending modal state
  static pendingMode = 'create';
  static pendingDiscussion = null;
  static pendingReplyingTo = null;

  oninit(vnode) {
    super.oninit(vnode);
    
    this.title = '';
    this.composer = app.composer;
    this.selectedTag = '';
    this.isSubmitting = false;
    this.editor = null;
    
    // Use pending state from static properties
    this.mode = CustomMobileCreateModal.pendingMode || 'create';
    this.discussion = CustomMobileCreateModal.pendingDiscussion || null;
    this.replyingTo = CustomMobileCreateModal.pendingReplyingTo || null;
    
    console.log('Modal initialized with mode:', this.mode, 'discussion:', this.discussion);
  }

  view() {
    if (window.innerWidth > 768) return null; // Desktop only shows default composer

    return (
      <div className={`CustomMobileCreateModal visible ${this.mode === 'reply' ? 'reply-mode' : 'create-mode'} ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
        {/* Header */}
        <div className="CustomMobileCreateModal-header">
          <h2>{this.mode === 'reply' ? (this.discussion ? `Trả lời: ${this.discussion.title()}` : 'Viết phản hồi') : 'Tạo chủ đề mới'}</h2>
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
          {this.mode === 'create' ? (
            // CREATE MODE - Structured form with labels
            <>
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

              {/* Content Editor */}
              <div className="form-group">
                <label>Nội dung (tùy chọn):</label>
                <div className="CustomMobileCreateModal-editor">
                  {TextEditor.component({
                    placeholder: 'Viết nội dung bài viết (không bắt buộc)...',
                    onchange: (value) => this.editor = value,
                    onsubmit: () => this.submit(),
                    value: this.editor || ''
                  })}
                </div>
              </div>
            </>
          ) : (
            // REPLY MODE - Simple comment-style interface
            <div className="CustomMobileCreateModal-replyBox">
              {TextEditor.component({
                placeholder: 'Viết phản hồi của bạn...',
                onchange: (value) => this.editor = value,
                onsubmit: () => this.submit(),
                value: this.editor || ''
              })}
            </div>
          )}
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
    // Get content from editor
    return this.editor || '';
  }

  setContent(value) {
    // Set editor content
    this.editor = value;
  }

  canSubmit() {
    if (this.mode === 'reply') {
      // For replies, only need content
      return this.editor && this.editor.trim() && app.session.user;
    } else {
      // For creating topics, need title
      return this.title.trim() && 
             app.session.user && 
             app.forum.attribute('canStartDiscussion');
    }
  }

  hide() {
    // Unmount the modal component
    const container = document.querySelector('#mobile-create-modal-container');
    if (container) {
      m.mount(container, null);
      container.remove();
    }
    
    document.body.classList.remove('mobile-create-modal-open');
    
    // Reset static pending state
    CustomMobileCreateModal.pendingMode = 'create';
    CustomMobileCreateModal.pendingDiscussion = null;
    CustomMobileCreateModal.pendingReplyingTo = null;
    
    // Restore the default composer if needed
    const composer = document.querySelector('#composer');
    if (composer) {
      composer.style.display = '';
    }
  }

  submit() {
    if (!this.canSubmit() || this.isSubmitting) return;

    this.isSubmitting = true;
    m.redraw();

    if (this.mode === 'reply') {
      // Submit reply
      this.submitReply();
    } else {
      // Submit new discussion
      this.submitDiscussion();
    }
  }

  submitDiscussion() {
    // Use Flarum's request system to submit data
    const content = this.getContent().trim() || ' '; // Ensure there's at least a space if content is empty
    const requestData = {
      data: {
        type: 'discussions',
        attributes: {
          title: this.title,
          content: content
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

  submitReply() {
    if (!this.discussion) return;

    const content = this.getContent().trim();
    const requestData = {
      data: {
        type: 'posts',
        attributes: {
          content: content
        },
        relationships: {
          discussion: {
            data: { type: 'discussions', id: this.discussion.id() }
          }
        }
      }
    };

    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/posts',
      body: requestData
    }).then((response) => {
      // Success - reload the discussion to show the new post
      const post = app.store.pushPayload(response);
      
      // Refresh the discussion to show the new post
      if (this.discussion) {
        this.discussion.freshness = new Date();
        this.discussion.lastPostedAt = new Date();
        this.discussion.lastPostedUser = app.session.user;
        if (this.discussion.data) {
          this.discussion.data.attributes.lastPostedAt = new Date();
        }
      }
      
      m.redraw();
      this.hide();
      
      // Scroll to the new post after a brief delay
      setTimeout(() => {
        const postElement = document.querySelector(`[data-id="${post.id()}"]`);
        if (postElement) {
          postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }).catch((error) => {
      // Error handling
      console.error('Failed to create reply:', error);
      
      // Show error message
      let errorMessage = 'Có lỗi xảy ra khi đăng phản hồi';
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

  static show(mode = 'create', discussion = null, replyingTo = null) {
    // Only on mobile
    if (window.innerWidth > 768) return;
    
    // Check if user is logged in first - redirect to login without showing form
    if (!app.session.user) {
      app.modal.show(LogInModal);
      return;
    }
    
    // Check permissions based on mode
    if (mode === 'create' && !app.forum.attribute('canStartDiscussion')) {
      if (app.alerts) {
        app.alerts.show({ type: 'error' }, 'Bạn không có quyền tạo chủ đề mới');
      }
      return;
    }
    
    // Set pending state BEFORE mounting/showing
    CustomMobileCreateModal.pendingMode = mode;
    CustomMobileCreateModal.pendingDiscussion = discussion;
    CustomMobileCreateModal.pendingReplyingTo = replyingTo;
    
    console.log('Setting modal mode to:', mode, 'with discussion:', discussion);
    
    // Hide any existing Flarum composer immediately 
    const composer = document.querySelector('#composer');
    if (composer) {
      composer.style.display = 'none';
    }

    // Mount the component if not already mounted, or remount to reset state
    let container = document.querySelector('#mobile-create-modal-container');
    
    if (container) {
      // Unmount and remount to ensure fresh state
      m.mount(container, null);
    } else {
      container = document.createElement('div');
      container.id = 'mobile-create-modal-container';
      document.body.appendChild(container);
    }
    
    // Mount with fresh state
    m.mount(container, CustomMobileCreateModal);
    
    // Show the modal immediately
    document.body.classList.add('mobile-create-modal-open');
    m.redraw();
  }

  static hide() {
    // Unmount the modal component
    const container = document.querySelector('#mobile-create-modal-container');
    if (container) {
      m.mount(container, null);
      container.remove();
    }
    
    document.body.classList.remove('mobile-create-modal-open');
    
    // Reset static pending state
    CustomMobileCreateModal.pendingMode = 'create';
    CustomMobileCreateModal.pendingDiscussion = null;
    CustomMobileCreateModal.pendingReplyingTo = null;
  }
}

