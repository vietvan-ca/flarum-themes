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
    this.editor = null;
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
            <div className="TextEditor-container">
              <TextEditor
                className="TextEditor--mobile"
                placeholder="Viết nội dung bài viết (không bắt buộc)..."
                value={this.getContent()}
                oninput={(value) => this.setContent(value)}
                oncreate={vnode => { 
                  this.editor = vnode; 
                  // Hide gallery buttons and keep only direct upload
                  this.configureDirectUpload();
                }}
                onupdate={() => this.configureDirectUpload()}
              />
            </div>
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
    if (this.editor && this.editor.state) {
      return this.editor.state.value || '';
    }
    return this._content || '';
  }

  setContent(value) {
    this._content = value;
    if (this.editor && this.editor.state) {
      this.editor.state.value = value;
    }
  }

  configureDirectUpload() {
    // Wait for toolbar to be rendered
    setTimeout(() => {
      const editorContainer = document.querySelector('.CustomMobileCreateModal .TextEditor-container');
      if (!editorContainer) return;

      // Hide gallery/media selection buttons but keep direct upload
      const buttonsToHide = [
        // File manager gallery buttons
        '.Button--icon[title*="Media Gallery"]',
        '.Button--icon[title*="Gallery"]', 
        '.Button--icon[data-tooltip*="Gallery"]',
        '.Button--icon[data-tooltip*="Media"]',
        '.Button--icon[aria-label*="Gallery"]',
        // FoF Upload gallery button
        'button[class*="fof-upload-gallery"]',
        'button[title*="Choose from gallery"]',
        '.Button[data-tooltip*="Choose from gallery"]'
      ];

      buttonsToHide.forEach(selector => {
        const elements = editorContainer.querySelectorAll(selector);
        elements.forEach(el => {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.remove();
        });
      });

      // Ensure direct upload button is visible and styled properly
      const uploadButtons = editorContainer.querySelectorAll([
        '.Button--icon[title*="Upload"]',
        '.Button--icon[data-tooltip*="Upload"]', 
        'button[class*="fof-upload-button"]:not([class*="gallery"])',
        '.item-fof-upload .Button'
      ].join(','));

      uploadButtons.forEach(btn => {
        if (btn && !btn.textContent.toLowerCase().includes('gallery')) {
          btn.style.display = 'inline-block';
          btn.style.visibility = 'visible';
          // Add direct upload styling
          btn.classList.add('Button--direct-upload');
          
          // If it's a file input, make it direct
          const fileInput = btn.querySelector('input[type="file"]');
          if (fileInput) {
            fileInput.accept = 'image/*,video/*,audio/*,application/pdf,.doc,.docx,.txt';
            fileInput.multiple = false; // Single file upload for simplicity
          }
        }
      });

      // Style the upload area for mobile
      const toolbar = editorContainer.querySelector('.TextEditor-toolbar');
      if (toolbar) {
        toolbar.classList.add('TextEditor-toolbar--mobile-direct');
      }

      // Add improved upload handling for direct upload
      this.enhanceDirectUpload(editorContainer);
    }, 100);
  }

  enhanceDirectUpload(container) {
    // Find upload buttons and enhance them for direct upload
    const uploadButtons = container.querySelectorAll('.Button--icon, .fof-upload-button');
    
    uploadButtons.forEach(btn => {
      const fileInput = btn.querySelector('input[type="file"]') || btn.previousElementSibling;
      
      if (fileInput && fileInput.type === 'file') {
        // Ensure direct upload behavior
        fileInput.accept = 'image/*,video/*,audio/*,application/pdf,.doc,.docx,.txt';
        fileInput.multiple = false;
        
        // Add direct upload handler
        const originalHandler = fileInput.onchange;
        fileInput.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            // Show upload feedback
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
            
            // Call original handler if exists, otherwise handle directly
            if (originalHandler) {
              originalHandler.call(fileInput, e);
            } else {
              this.handleDirectUpload(file, btn);
            }
            
            // Reset button after upload
            setTimeout(() => {
              btn.style.opacity = '1';
              btn.style.pointerEvents = 'auto';
            }, 2000);
          }
        };
      }
    });
  }

  handleDirectUpload(file, button) {
    // Basic direct upload handling
    console.log('Direct upload:', file.name);
    
    // You can add custom upload logic here if needed
    // For now, let Flarum's default upload system handle it
    if (app.alerts) {
      app.alerts.show({ type: 'success' }, `Đang tải lên: ${file.name}...`);
    }
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