/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/components/Logo.js":
/*!**************************************!*\
  !*** ./src/admin/components/Logo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);




var Logo = /*#__PURE__*/function (_Component) {
  function Logo() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Logo, _Component);
  var _proto = Logo.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view() {
    var logoUrl = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('vietvan_ca_logoUrl');
    var darkLogoUrl = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('vietvan_ca_logo_darkUrl');
    var isAdminDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
    if (isAdminDark && darkLogoUrl) {
      logoUrl = darkLogoUrl;
    }
    if (!logoUrl && darkLogoUrl) {
      logoUrl = darkLogoUrl;
    }
    if (!logoUrl) {
      return null;
    }
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().route('dashboard'),
      className: "Header-logo CustomHeaderLogo"
    }, m("img", {
      src: logoUrl,
      alt: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('title') + ' Admin Logo'
    }));
  };
  return Logo;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/ThemeSettingsPage.js":
/*!***************************************************!*\
  !*** ./src/admin/components/ThemeSettingsPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeSettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);





var locales = ['en', 'vi'];
var ThemeSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function ThemeSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ThemeSettingsPage, _ExtensionPage);
  var _proto = ThemeSettingsPage.prototype;
  _proto.content = function content() {
    var _this = this;
    // Get the current status of the hero banner toggle
    var isHeroBannerEnabled = this.setting('vietvan-ca-themes.hero_banner_enabled')() === '1';
    var isTextVisible = this.setting('vietvan-ca-themes.show_hero_text')() === '1';
    var isCustomColorEnabled = this.setting('vietvan-ca-themes.hero_custom_color_enabled')() === '1'; // State for custom color switch

    return m("div", {
      className: "ThemeSettingsPage"
    }, m("div", {
      className: "container ThemeSettingsPage-container"
    }, m("h2", {
      className: "ThemeSettingsPage-title"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.title')), m("div", {
      className: "Form ThemeSettingsPage-form"
    }, m("div", {
      className: "ThemeSettingsPage-section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title')), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: isHeroBannerEnabled,
      onchange: function onchange(value) {
        _this.setting('vietvan-ca-themes.hero_banner_enabled')(value ? '1' : '0');
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-banner-label') || 'Enable Hero Banner'), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-banner-help') || 'Toggle this option to enable or disable the hero banner section.')), isHeroBannerEnabled && m("div", {
      className: "ThemeSettingsPage-heroConfig"
    }, m("div", {
      className: "Form-group ThemeSettingsPage-imageUpload"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-label') || 'Hero Background Image'), m("div", {
      className: "ThemeSettingsPage-imageContainer"
    }, m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "vietvan_ca_hero_background_image",
      className: "ThemeSettingsPage-uploadButton"
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-help') || 'Upload an image to be displayed as the hero section background.')), m("div", {
      className: "Form-group ThemeSettingsPage-imageUpload"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-dark-label') || 'Hero Background Image'), m("div", {
      className: "ThemeSettingsPage-imageContainer"
    }, m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "vietvan_ca_hero_background_image_dark",
      className: "ThemeSettingsPage-uploadButton"
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.background-image-dark-help') || 'Upload an image to be displayed as the hero section background.')), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: isTextVisible,
      onchange: function onchange(value) {
        _this.setting('vietvan-ca-themes.show_hero_text')(value ? '1' : '0');
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.show-text-label') || 'Show Title and Description on Banner'), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.show-text-help') || 'When enabled, the title and description will be displayed on top of the banner image.')), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: isCustomColorEnabled,
      onchange: function onchange(value) {
        _this.setting('vietvan-ca-themes.hero_custom_color_enabled')(value ? '1' : '0');
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-custom-color-label') || 'Enable Custom Text Colors'), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.enable-custom-color-help') || 'If disabled, default theme colors will be used.')), isCustomColorEnabled && m("div", {
      className: "ThemeSettingsPage-grid"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title-color-label') || 'Title Text Color'), m("input", {
      className: "FormControl",
      type: "color",
      bidi: this.setting('vietvan-ca-themes.hero_title_color')
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.title-color-help') || 'Choose a color for the hero banner title text.')), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.description-color-label') || 'Description Text Color'), m("input", {
      className: "FormControl",
      type: "color",
      bidi: this.setting('vietvan-ca-themes.hero_description_color')
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.hero.description-color-help') || 'Choose a color for the hero banner description text.'))), m("div", {
      className: "ThemeSettingsPage-grid"
    }, locales.map(function (code) {
      return m("div", {
        className: "Form-group ThemeSettingsPage-formGroup",
        key: code
      }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.title-" + code + "-label")), m("input", {
        className: "FormControl",
        type: "text",
        bidi: _this.setting("vietvan-ca-themes.hero_title_" + code)
      }), m("div", {
        className: "helpText"
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder"), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.title-" + code + "-default")));
    }), locales.map(function (code) {
      return m("div", {
        className: "Form-group ThemeSettingsPage-formGroup",
        key: "desc-" + code
      }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.description-" + code + "-label")), m("textarea", {
        className: "FormControl ThemeSettingsPage-textarea",
        bidi: _this.setting("vietvan-ca-themes.hero_description_" + code)
      }), m("div", {
        className: "helpText"
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.global-placeholder"), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.hero.description-" + code + "-default")));
    })))), m("div", {
      className: "ThemeSettingsPage-section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.header.title")), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: this.setting('vietvan-ca-themes.show_register_button')() === '1',
      onchange: function onchange(value) {
        _this.setting('vietvan-ca-themes.show_register_button')(value ? '1' : '0');
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.header.show-register-button-label")), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("vietvan-ca-flarum-themes.admin.settings.header.show-register-button-help"))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-label')), m("input", {
      className: "FormControl",
      type: "text",
      bidi: this.setting('vietvan-ca-themes.back_button_custom_url'),
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-placeholder')
    }), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.header.back-button-url-help')))), m("div", {
      className: "ThemeSettingsPage-section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.title')), m("div", {
      className: "Form-group ThemeSettingsPage-imageUpload"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-light-label')), m("div", {
      className: "ThemeSettingsPage-imageContainer"
    }, m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "vietvan_ca_logo"
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-light-help'))), m("div", {
      className: "Form-group ThemeSettingsPage-imageUpload"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-dark-label')), m("div", {
      className: "ThemeSettingsPage-imageContainer"
    }, m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "vietvan_ca_logo_dark"
    })), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.admin.settings.logo.logo-dark-help')))), m("div", {
      className: "ThemeSettingsPage-footer"
    }, this.submitButton()))));
  };
  return ThemeSettingsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ThemeSettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ThemeSettingsPage */ "./src/admin/components/ThemeSettingsPage.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Logo */ "./src/admin/components/Logo.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/HeaderPrimary */ "flarum/admin/components/HeaderPrimary");
/* harmony import */ var flarum_admin_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__);





flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('vietvan-ca-themes', function () {
  var _app$history$initiali;
  // Check for custom logo, if it exists, remove the default logo
  var checkCustomLogo = function checkCustomLogo() {
    try {
      var lightLogoPath = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
      var darkLogoPath = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
      if (lightLogoPath || darkLogoPath) {
        // Remove the default logo
        var defaultLogo = document.querySelector('.Header-title');
        if (defaultLogo) {
          defaultLogo.remove();
        }
      }
    } catch (error) {
      console.error('Error checking custom logo:', error);
    }
  };

  // Run all component checks
  var runComponentChecks = function runComponentChecks() {
    checkCustomLogo();
  };

  // Run once when the document is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(runComponentChecks, 100);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(runComponentChecks, 100);
    });
  }

  // Also run when route changes, which is when app.forum might be ready
  (_app$history$initiali = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().history).initialized) == null || _app$history$initiali.then(function () {
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().history.router.on('changed', runComponentChecks);
  });

  // Extend the HeaderPrimary component to replace the logo with a custom one
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_admin_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'items', function (items) {
    var lightLogoPath = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
    var darkLogoPath = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
    if (lightLogoPath || darkLogoPath) {
      // Use the custom Logo component
      items.add('logo', m(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), 90);
    }
  });
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('vietvan-ca-themes').registerPage(_components_ThemeSettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerSetting({
    setting: 'font-zoom.default-scale',
    type: 'number',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('font-zoom.admin.settings.default_scale_label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('font-zoom.admin.settings.default_scale_help'),
    min: 0.5,
    max: 3.0,
    step: 0.1
  }).registerSetting({
    setting: 'font-zoom.show-quick-controls',
    type: 'boolean',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('font-zoom.admin.settings.quick_controls_label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('font-zoom.admin.settings.quick_controls_help')
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map