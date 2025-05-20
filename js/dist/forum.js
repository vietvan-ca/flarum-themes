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

/***/ "./src/forum/components/ActivityColumn.js":
/*!************************************************!*\
  !*** ./src/forum/components/ActivityColumn.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivityColumn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_discussionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/discussionHelpers */ "./src/forum/utils/discussionHelpers.js");




/**
 * Renders the activity column with time since last post and active users
 */
var ActivityColumn = /*#__PURE__*/function (_Component) {
  function ActivityColumn() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ActivityColumn, _Component);
  var _proto = ActivityColumn.prototype;
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    var lastPostedAt = discussion.lastPostedAt();
    var timeSince = lastPostedAt ? (0,_utils_discussionHelpers__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(new Date(lastPostedAt)) : '';
    var latestPosters = discussion.attribute('latestPosters') || [];
    return m('div.discussion-work', [m('div.time-since', timeSince), m('div.active-users', latestPosters.slice(0, 5).map(function (user, i) {
      return (0,_utils_discussionHelpers__WEBPACK_IMPORTED_MODULE_2__.renderUserAvatar)(user, i);
    }))]);
  };
  return ActivityColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/CustomDiscussionRow.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/CustomDiscussionRow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDiscussionRow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopicColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopicColumn */ "./src/forum/components/TopicColumn.js");
/* harmony import */ var _ReplyColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReplyColumn */ "./src/forum/components/ReplyColumn.js");
/* harmony import */ var _ViewColumn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewColumn */ "./src/forum/components/ViewColumn.js");
/* harmony import */ var _ActivityColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ActivityColumn */ "./src/forum/components/ActivityColumn.js");









/**
 * The main row component for discussions in the discussion list
 */
var CustomDiscussionRow = /*#__PURE__*/function (_Component) {
  function CustomDiscussionRow() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomDiscussionRow, _Component);
  var _proto = CustomDiscussionRow.prototype;
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: 'discussion-row',
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.discussion(discussion)
    }, [m(_TopicColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      discussion: discussion
    }), m(_ReplyColumn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      discussion: discussion
    }), m(_ViewColumn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      discussion: discussion
    }), m(_ActivityColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
      discussion: discussion
    })]);
  };
  return CustomDiscussionRow;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/DiscussionListHeader.js":
/*!******************************************************!*\
  !*** ./src/forum/components/DiscussionListHeader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionListHeader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Renders the header for the discussion list
 */
var DiscussionListHeader = /*#__PURE__*/function (_Component) {
  function DiscussionListHeader() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionListHeader, _Component);
  var _proto = DiscussionListHeader.prototype;
  _proto.view = function view() {
    return m("li", {
      className: "CustomDiscussionList-header"
    }, m("div", {
      className: "DiscussionListItem-info topic"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.topic')), m("div", {
      className: "DiscussionListItem-info replies"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.replies')), m("div", {
      className: "DiscussionListItem-info views"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.views')), m("div", {
      className: "DiscussionListItem-info activity"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-themes.forum.custom-discussion-header.activity')));
  };
  return DiscussionListHeader;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/HeroSection.js":
/*!*********************************************!*\
  !*** ./src/forum/components/HeroSection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


var HeroSection = /*#__PURE__*/function (_Component) {
  function HeroSection() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HeroSection, _Component);
  var _proto = HeroSection.prototype;
  _proto.oninit = function oninit(vnode) {
    var _forum$attribute, _forum$attribute2, _app$session$user;
    _Component.prototype.oninit.call(this, vnode);
    var forum = app.forum;
    // enabled?
    this.enabled = forum.attribute('vietvan_ca_hero_enabled') === '1';
    if (!this.enabled) return;

    // locale-specific text
    this.locale = app.translator.getLocale() || 'en';
    var titleKey = "vietvan_ca_hero_title_" + this.locale;
    var descKey = "vietvan_ca_hero_description_" + this.locale;
    this.title = (_forum$attribute = forum.attribute(titleKey)) != null ? _forum$attribute : app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    this.description = (_forum$attribute2 = forum.attribute(descKey)) != null ? _forum$attribute2 : app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');

    // show or hide text overlay?
    this.showText = forum.attribute('vietvan_ca_hero_show_text') === '1';

    // pick light vs dark background
    var mode = ((_app$session$user = app.session.user) == null ? void 0 : _app$session$user.preferences().fofNightMode) === 2 ? 'dark' : 'light';
    var bgAttr = mode === 'dark' ? 'vietvan_ca_hero_background_image_darkUrl' : 'vietvan_ca_hero_background_imageUrl';
    var bgUrl = forum.attribute(bgAttr);

    // prebuild the style object
    this.style = bgUrl ? {
      backgroundImage: "url(" + bgUrl + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    } : undefined;
  };
  _proto.view = function view() {
    // Don't render if not enabled
    if (!this.enabled) return null;

    // Only show on the homepage (root path)
    var currentPath = window.location.pathname;
    if (currentPath !== '/' && currentPath !== '') return null;
    return m("div", {
      className: "HeroSection",
      style: this.style
    }, this.showText && m("div", {
      className: "container"
    }, m("h1", {
      className: "HeroSection-title"
    }, this.title), m("p", {
      className: "HeroSection-subtitle"
    }, this.description)));
  };
  return HeroSection;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ReplyColumn.js":
/*!*********************************************!*\
  !*** ./src/forum/components/ReplyColumn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplyColumn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Renders the reply count column
 */
var ReplyColumn = /*#__PURE__*/function (_Component) {
  function ReplyColumn() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ReplyColumn, _Component);
  var _proto = ReplyColumn.prototype;
  _proto.view = function view() {
    var _discussion$replyCoun;
    var discussion = this.attrs.discussion;
    var replyCount = (_discussion$replyCoun = discussion.replyCount()) != null ? _discussion$replyCoun : 0;
    return m('div.discussion-reply', [m('span', replyCount)]);
  };
  return ReplyColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/TopicColumn.js":
/*!*********************************************!*\
  !*** ./src/forum/components/TopicColumn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopicColumn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Renders the topic column with title, tags, and excerpt
 */
var TopicColumn = /*#__PURE__*/function (_Component) {
  function TopicColumn() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TopicColumn, _Component);
  var _proto = TopicColumn.prototype;
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    var firstPost = discussion.firstPost();
    var tags = discussion.tags() || [];

    // Get sticky and locked status
    var isSticky = discussion.isSticky();
    var isLocked = discussion.isLocked();
    return m('div.discussion-topic', [m('div.discussion-badges', [
    // Display sticky and locked badges if applicable
    isSticky ? m('span.Badge.Badge--sticky', [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-thumbtack')]) : null, isLocked ? m('span.Badge.Badge--locked', [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-lock')]) : null]), m('div.discussion-title', [m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.discussion(discussion)
    }, discussion.title())]), m('div.discussion-tags', [tags.map(function (tag) {
      return m('span.discussion-tag', {
        className: tag.color() ? 'colored' : '',
        style: tag.color() ? {
          backgroundColor: tag.color()
        } : {}
      }, tag.name());
    })]), flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('custom-discussion-list.enable_excerpts') !== false ? m('div.discussion-excerpt', (firstPost == null ? void 0 : firstPost.contentPlain()) || '') : null]);
  };
  return TopicColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/ViewColumn.js":
/*!********************************************!*\
  !*** ./src/forum/components/ViewColumn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewColumn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Renders the view count column
 */
var ViewColumn = /*#__PURE__*/function (_Component) {
  function ViewColumn() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ViewColumn, _Component);
  var _proto = ViewColumn.prototype;
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    var viewCount = discussion.attribute('views') || 0;
    return m('div.discussion-view', [m('span', viewCount)]);
  };
  return ViewColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionList */ "flarum/forum/components/DiscussionList");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CustomDiscussionRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CustomDiscussionRow */ "./src/forum/components/CustomDiscussionRow.js");
/* harmony import */ var _components_DiscussionListHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DiscussionListHeader */ "./src/forum/components/DiscussionListHeader.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HeroSection */ "./src/forum/components/HeroSection.js");








flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('vietvan-ca-themes', function () {
  var _app$history$initiali;
  // Check for register button visibility using document events
  // This ensures the DOM is fully loaded
  var checkRegisterButtonVisibility = function checkRegisterButtonVisibility() {
    try {
      // Make sure app.forum exists and is initialized
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum) && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum).attribute) {
        var showRegisterButton = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_show_register_button') === '1';
        if (!showRegisterButton) {
          // remove the register button
          var registerButton = document.querySelector('.item-signUp');
          if (registerButton) {
            registerButton.remove();
          }
        }
      } else {
        console.log('app.forum not ready yet');
      }
    } catch (error) {
      console.error('Error checking register button visibility:', error);
    }
  };

  // Run once when the document is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(checkRegisterButtonVisibility, 100);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(checkRegisterButtonVisibility, 100);
    });
  }

  // Also run when route changes, which is when app.forum might be ready
  (_app$history$initiali = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history).initialized) == null || _app$history$initiali.then(function () {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history.router.on('changed', checkRegisterButtonVisibility);
  });

  // Extend the DiscussionListItem component to use the custom row
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'view', function (vnode) {
    vnode.children = [m(_components_CustomDiscussionRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      discussion: this.attrs.discussion
    })];
  });

  // Extend the DiscussionList component to add a header
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'view', function (vnode) {
    var originalChildren = vnode.children;
    vnode.children = [m('ul.DiscussionList', [m(_components_DiscussionListHeader__WEBPACK_IMPORTED_MODULE_6__["default"])].concat(originalChildren))];
  });

  // Extend the IndexPage component to add a hero section
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vnode) {
    var heroSection = m(_components_HeroSection__WEBPACK_IMPORTED_MODULE_7__["default"]);
    var originalChildren = vnode.children;
    vnode.children = [heroSection].concat(originalChildren);

    // Check visibility again when index page renders
    setTimeout(checkRegisterButtonVisibility, 100);
  });
});

/***/ }),

/***/ "./src/forum/utils/discussionHelpers.js":
/*!**********************************************!*\
  !*** ./src/forum/utils/discussionHelpers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorClass: () => (/* binding */ getColorClass),
/* harmony export */   getInitials: () => (/* binding */ getInitials),
/* harmony export */   getTimeSince: () => (/* binding */ getTimeSince),
/* harmony export */   renderUserAvatar: () => (/* binding */ renderUserAvatar)
/* harmony export */ });
/**
 * Helper function to calculate time since in days
 */
function getTimeSince(date) {
  if (!date) return '-';

  // Convert to Date object if string
  var dateObj = typeof date === 'string' ? new Date(date) : date;

  // Check if date is valid
  if (isNaN(dateObj.getTime())) return '-';
  var now = new Date();
  var diffTime = now - dateObj;

  // If time is in the future, return placeholder
  if (diffTime < 0) return '-';

  // Calculate time differences
  var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  var diffHours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var diffMinutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));

  // Return only the largest time unit
  if (diffDays >= 30) {
    // More than a month, show months
    var diffMonths = Math.floor(diffDays / 30);
    return diffMonths + 'mo';
  }
  if (diffDays > 0) {
    return diffDays + 'd';
  }
  if (diffHours > 0) {
    return diffHours + 'h';
  }
  if (diffMinutes > 0) {
    return diffMinutes + 'm';
  }

  // If less than a minute
  return 'now';
}

/**
 * Helper function to get user initials
 */
function getInitials(username) {
  if (!username) return '';
  return username.charAt(0).toUpperCase();
}

/**
 * Helper function to get color class based on index
 */
function getColorClass(index) {
  var colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
  return colorClasses[index % colorClasses.length];
}

/**
 * Renders user avatar with either image or initials
 */
function renderUserAvatar(user, index) {
  if (!user) return null;
  var userName = user.username || '';
  var avatarUrl = user.avatar_url;
  if (avatarUrl) {
    // If avatar URL exists, render the image
    return m('span.user-avatar', {
      title: userName
    }, m('img.avatar-image', {
      src: avatarUrl,
      alt: userName
    }));
  } else {
    // If no avatar URL, show initials with color background
    return m('span.user-avatar', {
      title: userName
    }, m('span.user-initial', {
      className: getColorClass(index)
    }, getInitials(userName)));
  }
}

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

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionList":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionList']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionList'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

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
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map