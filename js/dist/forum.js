<<<<<<< HEAD
(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["forum/app"];var r=t.n(e);const o=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/components/IndexPage"];var i=t.n(n);flarum.core.compat["forum/components/SettingsPage"];const a=flarum.core.compat["forum/components/DiscussionListItem"];var s=t.n(a);const c=flarum.core.compat["forum/components/DiscussionList"];var u=t.n(c);const l=flarum.core.compat["forum/components/HeaderPrimary"];var d=t.n(l);const f=flarum.core.compat["forum/components/HeaderSecondary"];var v=t.n(f);function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,h(t,e)}flarum.core.compat["common/components/TextEditor"];const y=flarum.core.compat["common/Component"];var g=t.n(y);const b=flarum.core.compat["common/components/Link"];var _=t.n(b);const w=flarum.core.compat["common/helpers/icon"];var k=t.n(w),M=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.discussion,e=t.firstPost(),o=t.tags()||[],n=t.isSticky(),i=t.isLocked();return m("div.discussion-topic",[m("div.discussion-badges",[n?m("span.Badge.Badge--sticky",[k()("fas fa-thumbtack")]):null,i?m("span.Badge.Badge--locked",[k()("fas fa-lock")]):null]),m("div.discussion-title",[m(_(),{href:r().route.discussion(t)},t.title())]),m("div.discussion-tags",[o.map((function(t){return m("span.discussion-tag",{className:t.color()?"colored":"",style:t.color()?{backgroundColor:t.color()}:{}},t.name())}))]),!1!==r().forum.attribute("custom-discussion-list.enable_excerpts")?m("div.discussion-excerpt",(null==e?void 0:e.contentPlain())||""):null])},e}(g()),S=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t,e=null!=(t=this.attrs.discussion.replyCount())?t:0;return m("div.discussion-reply",[m("span",e)])},e}(g()),N=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.discussion.attribute("views")||0;return m("div.discussion-view",[m("span",t)])},e}(g());function x(t){var e=["color-1","color-2","color-3","color-4","color-5"];return e[t%e.length]}var L=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.discussion.lastPostedAt(),e=t?function(t){if(!t)return"-";var e="string"==typeof t?new Date(t):t;if(isNaN(e.getTime()))return"-";var r=new Date-e;if(r<0)return"-";var o=Math.floor(r/864e5),n=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4);return o>=30?Math.floor(o/30)+"mo":o>0?o+"d":n>0?n+"h":i>0?i+"m":"now"}(new Date(t)):"";return m("div.discussion-activity",[m("span",e)])},e}(g()),P=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.discussion.attribute("latestPosters")||[];return m("div.discussion-users",[m("div.active-users",t.slice(0,5).map((function(t,e){return function(t,e){if(!t)return null;var r,o=t.username||"",n=t.avatar_url;return n?m("span.user-avatar",{title:o},m("img.avatar-image",{src:n,alt:o})):m("span.user-avatar",{title:o},m("span.user-initial",{className:x(e)},(r=o)?r.charAt(0).toUpperCase():""))}(t,e)})))])},e}(g()),C=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){var t=this.attrs.discussion;return m(_(),{className:"discussion-row",href:r().route.discussion(t)},[m(M,{discussion:t}),m(P,{discussion:t}),m(S,{discussion:t}),m(N,{discussion:t}),m(L,{discussion:t})])},e}(g()),I=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.view=function(){return m("li",{className:"CustomDiscussionList-header"},m("div",{className:"DiscussionListItem-info topic"},r().translator.trans("vietvan-ca-flarum-themes.forum.custom-discussion-header.topic")),m("div",{className:"DiscussionListItem-info replies"},r().translator.trans("vietvan-ca-flarum-themes.forum.custom-discussion-header.replies")),m("div",{className:"DiscussionListItem-info views"},r().translator.trans("vietvan-ca-flarum-themes.forum.custom-discussion-header.views")),m("div",{className:"DiscussionListItem-info activity"},r().translator.trans("vietvan-ca-flarum-themes.forum.custom-discussion-header.activity")))},e}(g());const O=flarum.core.compat["forum/components/Search"];var H=t.n(O),z=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var r=e.prototype;return r.oninit=function(e){var r,o,n=this;t.prototype.oninit.call(this,e);var i=app.forum;if(this.enabled="1"===i.attribute("vietvan_ca_hero_enabled"),this.enabled){this.mode=this.computeMode(),flarum.extensions["fof-nightmode"]&&this.setupNightModeListener(),this.setupSystemModeListener(),this.setupBodyClassObserver(),setTimeout((function(){var t=n.computeMode();t!==n.mode&&(n.mode=t,m.redraw())}),100),this.locale=app.translator.getLocale()||"en";var a="vietvan_ca_hero_title_"+this.locale,s="vietvan_ca_hero_description_"+this.locale;if(this.title=null!=(r=i.attribute(a))?r:app.translator.trans("vietvan-ca-flarum-themes.forum.hero.title"),this.description=null!=(o=i.attribute(s))?o:app.translator.trans("vietvan-ca-flarum-themes.forum.hero.description"),this.showText="1"===i.attribute("vietvan_ca_hero_show_text"),this.hasCustomColor="1"===i.attribute("vietvan_ca_hero_custom_color_enabled"),this.titleStyle={},this.descriptionStyle={},this.hasCustomColor){var c=i.attribute("vietvan_ca_hero_title_color")||"#ffffff",u=i.attribute("vietvan_ca_hero_subtitle_color")||"#ffffff";this.titleStyle={color:c},this.descriptionStyle={color:u}}}},r.computeMode=function(){var t;if(document.body.classList.contains("flarum--night"))return"dark";var e=app.session.user;if(e){var r=e.preferences().fofNightMode;return 2===r||"2"===r?"dark":1===r||"1"===r||0!==r&&"0"!==r&&null!=r||!window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark"}var o=null==(t=document.cookie.split("; ").find((function(t){return t.startsWith("flarum_nightmode=")})))?void 0:t.split("=")[1];return"2"===o?"dark":"1"===o||"0"!==o&&o?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},r.setupNightModeListener=function(){var t=this;this.nightModeHandler=function(e){t.mode="day"===e.detail?"light":"dark",m.redraw()},document.addEventListener("fofnightmodechange",this.nightModeHandler)},r.setupSystemModeListener=function(){var t=this,e=window.matchMedia("(prefers-color-scheme: dark)");this.systemModeHandler=function(e){var r=t.computeMode();r!==t.mode&&(t.mode=r,m.redraw())},e.addEventListener("change",this.systemModeHandler)},r.setupBodyClassObserver=function(){var t=this;this.bodyObserver=new MutationObserver((function(){var e=t.computeMode();e!==t.mode&&(t.mode=e,m.redraw())})),this.bodyObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]})},r.onremove=function(){this.nightModeHandler&&document.removeEventListener("fofnightmodechange",this.nightModeHandler),this.systemModeHandler&&window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.systemModeHandler),this.bodyObserver&&this.bodyObserver.disconnect()},r.getBackgroundStyle=function(){var t=app.forum,e="dark"===this.mode?"vietvan_ca_hero_background_image_darkUrl":"vietvan_ca_hero_background_imageUrl",r=t.attribute(e);return r?{backgroundImage:"url("+r+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"35vh"}:void 0},r.view=function(){if(!this.enabled)return null;var t=window.location.pathname;if("/"!==t&&""!==t)return null;var e=this.getBackgroundStyle();return m("div",{className:"HeroSection",style:e},this.showText&&m("div",{className:"container"},m("h1",{className:"HeroSection-title",style:this.titleStyle},this.title),m("p",{className:"HeroSection-subtitle",style:this.descriptionStyle},this.description)),m("div",{className:"container"},m(H(),{state:app.search})))},e}(g());flarum.core.compat["common/components/Button"];var B=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var o=e.prototype;return o.oninit=function(e){var o;t.prototype.oninit.call(this,e),this.mode=2===(null==(o=r().session.user)?void 0:o.preferences().fofNightMode)?"dark":"light",flarum.extensions["fof-nightmode"]&&this.setupNightModeListener()},o.setupNightModeListener=function(){var t=this;document.addEventListener("fofnightmodechange",(function(e){t.mode="day"===e.detail?"light":"dark",m.redraw()}))},o.view=function(){var t="dark"===this.mode?"vietvan_ca_logo_darkUrl":"vietvan_ca_logoUrl",e=r().forum.attribute(t);if(!e)return null;var o=r().forum.attribute("vietvan_ca_back_button_custom_url")||r().route("index");return m("a",{href:o,className:"Header-logo CustomHeaderLogo"},m("img",{src:e,alt:"VietVan CA"}))},e}(g());const D=flarum.core.compat["common/components/LinkButton"];var T=t.n(D),E=function(t){function e(){return t.apply(this,arguments)||this}p(e,t);var o=e.prototype;return o.view=function(){var t,e=this,o=null==(t=r().search.params())?void 0:t.sort,n=[{key:"latest",label:r().translator.trans("core.forum.index_sort.latest_button"),sortParam:"",default:!0},{key:"top",label:r().translator.trans("core.forum.index_sort.top_button"),sortParam:"top"},{key:"newest",label:r().translator.trans("core.forum.index_sort.newest_button"),sortParam:"newest"},{key:"oldest",label:r().translator.trans("core.forum.index_sort.oldest_button"),sortParam:"oldest"}];return m("div",{className:"CustomDiscussionTabNavigation"},n.map((function(t){var n;return n=t.routeName?r().current.matches(t.routeName):t.isFilter?r().search.params.q&&r().search.params.q.includes(t.filterParam):o===t.sortParam||!o&&t.default,m(T(),{className:"SortItem Button Button--link "+(n?"active":""),onclick:function(){return e.navigateTo(t)}},t.label)})))},o.navigateTo=function(t){var e=m.route.get().split("?")[0];t.default||(e+="?sort="+t.sortParam),m.route.set(e)},e}(g());function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}r().initializers.add("vietvan-ca-themes",(function(){var t,e=function(){!function(){try{var t;if(null!=(t=r().forum)&&t.attribute&&"1"!==r().forum.attribute("vietvan_ca_show_register_button")){var e=document.querySelector(".item-signUp");null==e||e.remove()}}catch(t){console.error("Error checking register button visibility:",t)}}(),function(){try{var t=r().forum.attribute("vietvan_ca_logoUrl"),e=r().forum.attribute("vietvan_ca_logo_darkUrl");if(t||e){var o=document.querySelector(".Header-title");null==o||o.remove()}}catch(t){console.error("Error checking custom logo:",t)}}()};"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,100):document.addEventListener("DOMContentLoaded",(function(){setTimeout(e,100)})),null==(t=r().history.initialized)||t.then((function(){r().history.router.on("changed",e)})),(0,o.extend)(d().prototype,"items",(function(t){var e=r().forum.attribute("vietvan_ca_logoUrl"),o=r().forum.attribute("vietvan_ca_logo_darkUrl");(e||o)&&t.add("logo",m(B,null),90)})),(0,o.extend)(v().prototype,"items",(function(t){t.has("search")&&t.remove("search")})),(0,o.extend)(s().prototype,"view",(function(t){t.children=[m(C,{discussion:this.attrs.discussion})]})),(0,o.extend)(u().prototype,"view",(function(t){var e=t.children;t.children=[m("ul.DiscussionList",[m(I)].concat(e))]})),(0,o.extend)(i().prototype,"view",(function(t){var r=m(z),o=t.children;t.children=[r].concat(o);var n=m(E,null),i=function(t){for(var e,r,o=t,n=function(){var t,e=r.value;if(null==(t=o)||!t.children||!Array.isArray(o.children))return{v:null};var n=o.children.find((function(t){var r;return null==t||null==(r=t.attrs)||null==(r=r.className)?void 0:r.includes(e)}));if(!n)return{v:null};o=n},i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return A(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(["container","sideNavContainer","IndexPage-results","IndexPage-toolbar","IndexPage-toolbar-view"]);!(r=i()).done;)if(e=n())return e.v;return o}({children:o});i?i.children=[n]:console.warn("IndexPage-toolbar-view not found. CustomTabNavigation not added."),setTimeout(e,100)})),function(t){var e=document.getElementById("font-zoom-style");e&&e.remove();var r=document.createElement("style");r.id="font-zoom-style",r.textContent="\n    .App {\n      font-size: 1.05rem !important;\n    }\n    \n    /* Ensure consistent scaling across all text elements */\n    .Post-body,\n    .PostPreview-body,\n    .UserCard-info,\n    .NotificationGrid-content,\n    .Dropdown-menu,\n    .Modal-body,\n    .Form-group label,\n    .Form-group input,\n    .Form-group textarea,\n    .TagLabel,\n    .Badge {\n      font-size: 1.05em !important;\n    }\n    \n    /* Scale headings proportionally */\n    h1 { font-size: 2.1rem !important; }\n    h2 { font-size: "+1.5*t+"rem !important; }\n    h3 { font-size: 1.3125rem !important; }\n    h4 { font-size: "+1.125*t+"rem !important; }\n    h5 { font-size: 1.05rem !important; }\n    h6 { font-size: "+.875*t+"rem !important; }\n    \n    /* Scale code blocks */\n    code,\n    pre {\n      font-size: "+.875*t+"em !important;\n    }\n  ",document.head.appendChild(r),localStorage.setItem("flarum-font-zoom-scale",t.toString())}(1.05)}))})(),module.exports={}})();
=======
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
    return m('div.discussion-activity', [m('span', timeSince)]);
  };
  return ActivityColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BackButton.js":
/*!********************************************!*\
  !*** ./src/forum/components/BackButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




var BackButton = /*#__PURE__*/function (_Component) {
  function BackButton() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BackButton, _Component);
  var _proto = BackButton.prototype;
  _proto.view = function view() {
    var customUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('vietvan_ca_back_button_custom_url');
    if (!customUrl || customUrl.trim() === '') {
      // If no custom URL is set, do not render the button
      return null;
    }
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--link Header-back",
      icon: "fas fa-chevron-left",
      onclick: this.goBack.bind(this),
      title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.forum.header.back_button_tooltip')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-themes.forum.header.back_button_text') || 'Back');
  };
  _proto.goBack = function goBack() {
    var customUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('vietvan_ca_back_button_custom_url');
    if (customUrl && customUrl.trim() !== '') {
      // Check if the custom URL is a valid URL
      if (customUrl.startsWith('http://') || customUrl.startsWith('https://') || customUrl.startsWith('//')) {
        window.location.href = customUrl; // For external URLs
      } else {
        window.location.href = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + customUrl; // For internal URLs
      }
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/'; // Fallback to home if no history or custom URL is set
    }
  };
  return BackButton;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


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
/* harmony import */ var _LastUsersColumn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LastUsersColumn */ "./src/forum/components/LastUsersColumn.js");










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
    }), m(_LastUsersColumn__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

/***/ "./src/forum/components/CustomDiscussionTabNavigation.js":
/*!***************************************************************!*\
  !*** ./src/forum/components/CustomDiscussionTabNavigation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDiscussionTabNavigation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);




var CustomDiscussionTabNavigation = /*#__PURE__*/function (_Component) {
  function CustomDiscussionTabNavigation() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomDiscussionTabNavigation, _Component);
  var _proto = CustomDiscussionTabNavigation.prototype;
  _proto.view = function view() {
    var _app$search$params,
      _this = this;
    var currentSort = (_app$search$params = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().search.params()) == null ? void 0 : _app$search$params.sort;
    var tabs = [{
      key: 'latest',
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('core.forum.index_sort.latest_button'),
      sortParam: '',
      "default": true
    }, {
      key: 'top',
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('core.forum.index_sort.top_button'),
      sortParam: 'top'
    }, {
      key: 'newest',
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('core.forum.index_sort.newest_button'),
      sortParam: 'newest'
    }, {
      key: 'oldest',
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('core.forum.index_sort.oldest_button'),
      sortParam: 'oldest'
    }];
    return m("div", {
      className: "CustomDiscussionTabNavigation"
    }, tabs.map(function (tab) {
      var isActive = false;
      if (tab.routeName) {
        isActive = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().current.matches(tab.routeName);
      } else if (tab.isFilter) {
        isActive = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().search).params.q && flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().search.params.q.includes(tab.filterParam);
      } else {
        isActive = currentSort === tab.sortParam || !currentSort && tab["default"];
      }
      return m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "SortItem Button Button--link " + (isActive ? 'active' : ''),
        onclick: function onclick() {
          return _this.navigateTo(tab);
        }
      }, tab.label);
    }));
  };
  _proto.navigateTo = function navigateTo(tab) {
    // 1. Get the current URL path (e.g., /t/general?sort=newest)
    var currentPath = m.route.get();

    // 2. Remove any existing query parameters by splitting the string at the '?'
    var basePath = currentPath.split('?')[0]; // Result: /t/general

    // 3. Build the new URL path string
    var newPath = basePath;
    if (!tab["default"]) {
      // Add the sort parameter if this tab is not the default one
      newPath += '?sort=' + tab.sortParam;
    }

    // 4. Use m.route.set() to navigate to the new URL without a full page reload
    m.route.set(newPath);
  };
  return CustomDiscussionTabNavigation;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/CustomMobileDiscussionToolbar.js":
/*!***************************************************************!*\
  !*** ./src/forum/components/CustomMobileDiscussionToolbar.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomMobileDiscussionToolbar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__);










var CustomMobileDiscussionToolbar = /*#__PURE__*/function (_Component) {
  function CustomMobileDiscussionToolbar() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomMobileDiscussionToolbar, _Component);
  var _proto = CustomMobileDiscussionToolbar.prototype;
  _proto.view = function view() {
    var _this = this;
    return m("div", {
      className: "CustomMobileDiscussionToolbar"
    }, m("div", {
      className: "CustomMobileDiscussionToolbar-left"
    }, m("span", {
      className: "CustomMobileDiscussionToolbar-date"
    }, this.currentDate), flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_8___default().component({
      buttonClassName: 'Button Button--text',
      className: 'App-titleControl'
    }, this.getNavigationItems().toArray())), m("button", {
      "class": "Button Button--icon CustomMobileDiscussionToolbar-button",
      type: "button",
      "aria-label": "Start Discussion",
      onclick: function onclick() {
        return _this.newDiscussionAction();
      }
    }, m("i", {
      "aria-hidden": "true",
      "class": "icon fas fa-edit Button-icon"
    }), m("span", {
      "class": "Button-label"
    })));
  };
  _proto.getNavigationItems = function getNavigationItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();

    // All Discussions
    items.add('all-discussions', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default().component({
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('index'),
      icon: 'fas fa-comments'
    }, 'All Discussions'), 100);

    // Tags
    items.add('tags', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default().component({
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('tags'),
      icon: 'fas fa-th-large'
    }, 'Tags'), 90);

    // Get all tags from the store
    var allTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.all('tags');
    if (allTags && allTags.length > 0) {
      // Filter and sort primary tags
      var primaryTags = allTags.filter(function (tag) {
        // Only show primary tags (no parent)
        var hasParent = tag.parent && tag.parent();
        var position = tag.position();
        // Include tags that don't have a parent and have a position
        return !hasParent && position !== null && position !== undefined;
      }).sort(function (a, b) {
        return a.position() - b.position();
      });

      // Add each tag to the dropdown
      primaryTags.forEach(function (tag, index) {
        items.add("tag-" + tag.id(), flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default().component({
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('tag', {
            tags: tag.slug()
          }),
          icon: 'fas fa-circle',
          style: tag.color() ? {
            color: tag.color()
          } : {}
        }, tag.name()), 80 - index);
      });
    }
    return items;
  };
  _proto.newDiscussionAction = function newDiscussionAction() {
    return new Promise(function (resolve, reject) {
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session).user) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().composer.load((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default()), {
          user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session).user
        });
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().composer.show();
        return resolve((flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().composer));
      } else {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default()));
        return reject();
      }
    });
  };
  return CustomMobileDiscussionToolbar;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


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
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/Search */ "flarum/forum/components/Search");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomMobileDiscussionToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomMobileDiscussionToolbar */ "./src/forum/components/CustomMobileDiscussionToolbar.js");




var HeroSection = /*#__PURE__*/function (_Component) {
  function HeroSection() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HeroSection, _Component);
  var _proto = HeroSection.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this,
      _forum$attribute,
      _forum$attribute2;
    _Component.prototype.oninit.call(this, vnode);
    var forum = app.forum;
    // enabled?
    this.enabled = forum.attribute('vietvan_ca_hero_enabled') === '1';
    if (!this.enabled) return;

    // Compute initial mode
    this.mode = this.computeMode();

    // Setup listeners
    if (flarum.extensions['fof-nightmode']) {
      this.setupNightModeListener();
    }
    this.setupSystemModeListener();
    this.setupBodyClassObserver();

    // Re-check mode after a short delay (in case FoF extension hasn't initialized yet)
    setTimeout(function () {
      var newMode = _this.computeMode();
      if (newMode !== _this.mode) {
        _this.mode = newMode;
        m.redraw();
      }
    }, 100);

    // locale-specific text
    this.locale = app.translator.getLocale() || 'en';
    var titleKey = "vietvan_ca_hero_title_" + this.locale;
    var descKey = "vietvan_ca_hero_description_" + this.locale;
    this.title = (_forum$attribute = forum.attribute(titleKey)) != null ? _forum$attribute : app.translator.trans('vietvan-ca-flarum-themes.forum.hero.title');
    this.description = (_forum$attribute2 = forum.attribute(descKey)) != null ? _forum$attribute2 : app.translator.trans('vietvan-ca-flarum-themes.forum.hero.description');

    // show or hide text overlay?
    this.showText = forum.attribute('vietvan_ca_hero_show_text') === '1';

    // has custom text color?
    this.hasCustomColor = forum.attribute('vietvan_ca_hero_custom_color_enabled') === '1';
    this.titleStyle = {};
    this.descriptionStyle = {};
    if (this.hasCustomColor) {
      var titleColor = forum.attribute('vietvan_ca_hero_title_color') || '#ffffff';
      var subtitleColor = forum.attribute('vietvan_ca_hero_subtitle_color') || '#ffffff';
      this.titleStyle = {
        color: titleColor
      };
      this.descriptionStyle = {
        color: subtitleColor
      };
    }
  };
  _proto.computeMode = function computeMode() {
    var _document$cookie$spli;
    // First, check if FoF Night Mode is active by checking the body class
    // This is the most reliable way to detect actual dark mode state
    if (document.body.classList.contains('flarum--night')) {
      return 'dark';
    }

    // Check if user is logged in
    var user = app.session.user;
    if (user) {
      // Logged in: use user preference from FoF Night Mode
      var pref = user.preferences().fofNightMode;
      // FoF Night Mode stores as integers: 0 = auto, 1 = light, 2 = dark
      if (pref === 2 || pref === '2') return 'dark';
      if (pref === 1 || pref === '1') return 'light';
      if (pref === 0 || pref === '0' || pref === null || pref === undefined) {
        // System preference for logged-in user
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }

    // Guest: check cookie
    var cookieValue = (_document$cookie$spli = document.cookie.split('; ').find(function (row) {
      return row.startsWith('flarum_nightmode=');
    })) == null ? void 0 : _document$cookie$spli.split('=')[1];
    if (cookieValue === '2') return 'dark';
    if (cookieValue === '1') return 'light';
    if (cookieValue === '0' || !cookieValue) {
      // System preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Default
    return 'light';
  };
  _proto.setupNightModeListener = function setupNightModeListener() {
    var _this2 = this;
    this.nightModeHandler = function (event) {
      _this2.mode = event.detail === 'day' ? 'light' : 'dark';
      m.redraw();
    };
    document.addEventListener('fofnightmodechange', this.nightModeHandler);
  };
  _proto.setupSystemModeListener = function setupSystemModeListener() {
    var _this3 = this;
    // Listen to OS-level dark mode changes
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemModeHandler = function (e) {
      var newMode = _this3.computeMode();
      if (newMode !== _this3.mode) {
        _this3.mode = newMode;
        m.redraw();
      }
    };
    mediaQuery.addEventListener('change', this.systemModeHandler);
  };
  _proto.setupBodyClassObserver = function setupBodyClassObserver() {
    var _this4 = this;
    // Watch for changes to body class (when FoF Night Mode toggles)
    this.bodyObserver = new MutationObserver(function () {
      var newMode = _this4.computeMode();
      if (newMode !== _this4.mode) {
        _this4.mode = newMode;
        m.redraw();
      }
    });
    this.bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  };
  _proto.onremove = function onremove() {
    // Clean up listeners
    if (this.nightModeHandler) {
      document.removeEventListener('fofnightmodechange', this.nightModeHandler);
    }
    if (this.systemModeHandler) {
      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.removeEventListener('change', this.systemModeHandler);
    }
    if (this.bodyObserver) {
      this.bodyObserver.disconnect();
    }
  };
  _proto.getBackgroundStyle = function getBackgroundStyle() {
    var forum = app.forum;
    var bgAttr = this.mode === 'dark' ? 'vietvan_ca_hero_background_image_darkUrl' : 'vietvan_ca_hero_background_imageUrl';
    var bgUrl = forum.attribute(bgAttr);
    return bgUrl ? {
      height: '35vh',
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

    // Get background style dynamically on each render
    var backgroundStyle = this.getBackgroundStyle();
    return m("div", {
      className: "HeroSection",
      style: backgroundStyle
    }, this.showText && m("div", {
      className: "container"
    }, m("h1", {
      className: "HeroSection-title",
      style: this.titleStyle
    }, this.title), m("p", {
      className: "HeroSection-subtitle",
      style: this.descriptionStyle
    }, this.description)), m("div", {
      className: "container"
    }, m((flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_2___default()), {
      state: app.search
    })));
  };
  return HeroSection;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/LastUsersColumn.js":
/*!*************************************************!*\
  !*** ./src/forum/components/LastUsersColumn.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LastUsersColumn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_discussionHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/discussionHelpers */ "./src/forum/utils/discussionHelpers.js");




/**
 * Renders the activity column with time since last post and active users
 */
var LastUsersColumn = /*#__PURE__*/function (_Component) {
  function LastUsersColumn() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LastUsersColumn, _Component);
  var _proto = LastUsersColumn.prototype;
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    var latestPosters = discussion.attribute('latestPosters') || [];
    return m('div.discussion-users', [m('div.active-users', latestPosters.slice(0, 5).map(function (user, i) {
      return (0,_utils_discussionHelpers__WEBPACK_IMPORTED_MODULE_2__.renderUserAvatar)(user, i);
    }))]);
  };
  return LastUsersColumn;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/Logo.js":
/*!**************************************!*\
  !*** ./src/forum/components/Logo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var Logo = /*#__PURE__*/function (_Component) {
  function Logo() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Logo, _Component);
  var _proto = Logo.prototype;
  _proto.oninit = function oninit(vnode) {
    var _app$session$user;
    _Component.prototype.oninit.call(this, vnode);
    this.mode = ((_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) == null ? void 0 : _app$session$user.preferences().fofNightMode) === 2 ? 'dark' : 'light';
    if (flarum.extensions['fof-nightmode']) {
      this.setupNightModeListener();
    }
  };
  _proto.setupNightModeListener = function setupNightModeListener() {
    var _this = this;
    document.addEventListener('fofnightmodechange', function (event) {
      _this.mode = event.detail === 'day' ? 'light' : 'dark';
      m.redraw();
    });
  };
  _proto.view = function view(vnode) {
    var logoAttr = this.mode === 'dark' ? 'vietvan_ca_logo_darkUrl' : 'vietvan_ca_logoUrl';
    var logoUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute(logoAttr);
    if (!logoUrl) return null;
    var customUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('vietvan_ca_back_button_custom_url') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('index');
    var imageStyle = vnode.attrs.imageStyle || {};
    return m("a", {
      href: customUrl,
      className: "Header-logo CustomHeaderLogo"
    }, m("img", {
      src: logoUrl,
      alt: 'VietVan CA',
      style: imageStyle
    }));
  };
  return Logo;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


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
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CustomDiscussionRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CustomDiscussionRow */ "./src/forum/components/CustomDiscussionRow.js");
/* harmony import */ var _components_DiscussionListHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/DiscussionListHeader */ "./src/forum/components/DiscussionListHeader.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HeroSection */ "./src/forum/components/HeroSection.js");
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/BackButton */ "./src/forum/components/BackButton.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Logo */ "./src/forum/components/Logo.js");
/* harmony import */ var _components_CustomDiscussionTabNavigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/CustomDiscussionTabNavigation */ "./src/forum/components/CustomDiscussionTabNavigation.js");
/* harmony import */ var _components_CustomMobileDiscussionToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/CustomMobileDiscussionToolbar */ "./src/forum/components/CustomMobileDiscussionToolbar.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }














flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('vietvan-ca-themes', function () {
  // Utility function to find element by class path
  var findElementByPath = function findElementByPath(vnode, path) {
    var current = vnode;
    var _loop = function _loop() {
        var _current;
        var className = _step.value;
        if (!((_current = current) != null && _current.children) || !Array.isArray(current.children)) {
          return {
            v: null
          };
        }
        var found = current.children.find(function (child) {
          var _child$attrs;
          return child == null || (_child$attrs = child.attrs) == null || (_child$attrs = _child$attrs.className) == null ? void 0 : _child$attrs.includes(className);
        });
        if (!found) return {
          v: null
        };
        current = found;
      },
      _ret;
    for (var _iterator = _createForOfIteratorHelperLoose(path), _step; !(_step = _iterator()).done;) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
    return current;
  };

  // Check for register button visibility using document events
  var checkRegisterButtonVisibility = function checkRegisterButtonVisibility() {
    try {
      var _app$forum;
      if ((_app$forum = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum)) != null && _app$forum.attribute) {
        var showRegisterButton = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_show_register_button') === '1';
        if (!showRegisterButton) {
          var registerButton = document.querySelector('.item-signUp');
          registerButton == null || registerButton.remove();
        }
      }
    } catch (error) {
      var _console;
      /* eslint-disable */(_console = console).error.apply(_console, oo_tx("3157176464_48_6_48_72_11", 'Error checking register button visibility:', error));
    }
  };

  // Check for custom logo, if it exists, remove the default logo
  var checkCustomLogo = function checkCustomLogo() {
    try {
      var lightLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
      var darkLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
      if (lightLogoPath || darkLogoPath) {
        var defaultLogo = document.querySelector('.Header-title');
        defaultLogo == null || defaultLogo.remove();
      }
    } catch (error) {
      var _console2;
      /* eslint-disable */(_console2 = console).error.apply(_console2, oo_tx("3157176464_63_6_63_57_11", 'Error checking custom logo:', error));
    }
  };

  // Run all component checks
  var runComponentChecks = function runComponentChecks() {
    checkRegisterButtonVisibility();
    checkCustomLogo();
  };

  // Initialize component checks
  var initializeChecks = function initializeChecks() {
    var _app$history$initiali;
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(runComponentChecks, 100);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(runComponentChecks, 100);
      });
    }

    // Run when route changes
    (_app$history$initiali = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history).initialized) == null || _app$history$initiali.then(function () {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history.router.on('changed', runComponentChecks);
    });
  };

  // Initialize checks
  initializeChecks();

  // Extend the HeaderPrimary component to replace the logo with a custom one
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'items', function (items) {
    var lightLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
    var darkLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
    if (lightLogoPath || darkLogoPath) {
      items.add('logo', m(_components_Logo__WEBPACK_IMPORTED_MODULE_11__["default"], null), 90);
    }
  });

  // Extend the HeaderSecondary component to remove the search component
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'items', function (items) {
    if (items.has('search')) {
      items.remove('search');
    }
  });

  // Extend the DiscussionListItem component to use the custom row
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'view', function (vnode) {
    vnode.children = [m(_components_CustomDiscussionRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      discussion: this.attrs.discussion
    })];
  });

  // Extend the DiscussionList component to add a header
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'view', function (vnode) {
    var originalChildren = vnode.children;
    vnode.children = [m('ul.DiscussionList', [m(_components_DiscussionListHeader__WEBPACK_IMPORTED_MODULE_8__["default"])].concat(originalChildren))];
  });

  // Extend the IndexPage component to add a hero section and custom tabs
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vnode) {
    // Add HeroSection at the beginning
    var heroSectionInstance = m(_components_HeroSection__WEBPACK_IMPORTED_MODULE_9__["default"]);
    var originalChildren = vnode.children;
    vnode.children = [heroSectionInstance].concat(originalChildren);

    // Create custom mobile discussion toolbar instance
    var customMobileDiscussionToolbarInstance = m(_components_CustomMobileDiscussionToolbar__WEBPACK_IMPORTED_MODULE_13__["default"], null);

    // Create custom tabs instance
    var customTabsInstance = m(_components_CustomDiscussionTabNavigation__WEBPACK_IMPORTED_MODULE_12__["default"], null);

    // Find toolbar using optimized path traversal
    var toolbarPath = ['container', 'sideNavContainer', 'IndexPage-results', 'IndexPage-toolbar', 'IndexPage-toolbar-view'];
    var toolbarDiv = findElementByPath({
      children: originalChildren
    }, toolbarPath);
    if (toolbarDiv) {
      // Replace toolbar content with custom tabs
      toolbarDiv.children = [customMobileDiscussionToolbarInstance, customTabsInstance];
    } else {
      var _console3;
      /* eslint-disable */(_console3 = console).warn.apply(_console3, oo_tr("3157176464_145_6_145_86_8", 'IndexPage-toolbar-view not found. CustomTabNavigation not added.'));
    }

    // Run component checks after render
    setTimeout(runComponentChecks, 100);
  });

  // Add mobile logo using DOM manipulation
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var lightLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
    var darkLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
    if (lightLogoPath || darkLogoPath) {
      this.addMobileLogo();
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onupdate', function () {
    var lightLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logoUrl');
    var darkLogoPath = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('vietvan_ca_logo_darkUrl');
    if (lightLogoPath || darkLogoPath) {
      this.addMobileLogo();
    }
  });

  // Add method to IndexPage prototype
  (flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).addMobileLogo = function () {
    var navElement = document.getElementById('app-navigation');
    if (navElement && !navElement.querySelector('.Navigation-logo')) {
      // Create logo container
      var logoDiv = document.createElement('div');
      logoDiv.className = 'Navigation-logo Mobile-only';

      // Mount Logo component into the div
      m.mount(logoDiv, {
        view: function view() {
          return m(_components_Logo__WEBPACK_IMPORTED_MODULE_11__["default"], {
            imageStyle: {
              height: '30px'
            }
          });
        }
      });

      // Insert at the beginning of navigation (before App-backControl)
      var backControl = navElement.querySelector('.App-backControl');
      if (backControl) {
        navElement.insertBefore(logoDiv, backControl);
      } else {
        navElement.insertBefore(logoDiv, navElement.firstChild);
      }
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onremove', function () {
    var navElement = document.getElementById('app-navigation');
    var logoElement = navElement == null ? void 0 : navElement.querySelector('.Navigation-logo');
    if (logoElement) {
      m.mount(logoElement, null); // Unmount the component
      logoElement.remove();
    }
  });

  // Adding scale font size feature
  var currentScale = 1.05;

  // Apply initial font zoom
  applyFontZoom(currentScale);
});
function applyFontZoom(scale) {
  // Remove existing font zoom styles
  var existingStyle = document.getElementById('font-zoom-style');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Create new style element
  var style = document.createElement('style');
  style.id = 'font-zoom-style';

  // Apply zoom to various elements
  style.textContent = "\n    .App {\n      font-size: " + scale + "rem !important;\n    }\n    \n    /* Ensure consistent scaling across all text elements */\n    .Post-body,\n    .PostPreview-body,\n    .UserCard-info,\n    .NotificationGrid-content,\n    .Dropdown-menu,\n    .Modal-body,\n    .Form-group label,\n    .Form-group input,\n    .Form-group textarea,\n    .TagLabel,\n    .Badge {\n      font-size: " + scale + "em !important;\n    }\n    \n    /* Scale headings proportionally */\n    h1 { font-size: " + scale * 2 + "rem !important; }\n    h2 { font-size: " + scale * 1.5 + "rem !important; }\n    h3 { font-size: " + scale * 1.25 + "rem !important; }\n    h4 { font-size: " + scale * 1.125 + "rem !important; }\n    h5 { font-size: " + scale * 1 + "rem !important; }\n    h6 { font-size: " + scale * 0.875 + "rem !important; }\n    \n    /* Scale code blocks */\n    code,\n    pre {\n      font-size: " + scale * 0.875 + "em !important;\n    }\n  ";
  document.head.appendChild(style);

  // Store for guests as mitigate if improved
  localStorage.setItem('flarum-font-zoom-scale', scale.toString());
}
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x54cc26=_0x4a90;(function(_0xfc324,_0x488d96){var _0x65efb7=_0x4a90,_0x533ce3=_0xfc324();while(!![]){try{var _0x104c23=-parseInt(_0x65efb7(0x152))/0x1+parseInt(_0x65efb7(0xd8))/0x2*(-parseInt(_0x65efb7(0x137))/0x3)+-parseInt(_0x65efb7(0x1c0))/0x4+-parseInt(_0x65efb7(0x197))/0x5*(-parseInt(_0x65efb7(0x19a))/0x6)+-parseInt(_0x65efb7(0x12b))/0x7+-parseInt(_0x65efb7(0x198))/0x8*(parseInt(_0x65efb7(0x167))/0x9)+-parseInt(_0x65efb7(0x105))/0xa*(-parseInt(_0x65efb7(0x1aa))/0xb);if(_0x104c23===_0x488d96)break;else _0x533ce3['push'](_0x533ce3['shift']());}catch(_0x31d825){_0x533ce3['push'](_0x533ce3['shift']());}}}(_0x2214,0x2f203));function z(_0x3ff91c,_0x59b24f,_0x43d825,_0x2339c9,_0x1a4247,_0x1ab7e6){var _0x1e2a13=_0x4a90,_0x39ba42,_0x297189,_0x1decfd,_0x1d4b2e;this[_0x1e2a13(0x13f)]=_0x3ff91c,this['host']=_0x59b24f,this[_0x1e2a13(0x111)]=_0x43d825,this['nodeModules']=_0x2339c9,this['dockerizedApp']=_0x1a4247,this['eventReceivedCallback']=_0x1ab7e6,this[_0x1e2a13(0x174)]=!0x0,this[_0x1e2a13(0x182)]=!0x0,this[_0x1e2a13(0xdd)]=!0x1,this['_connecting']=!0x1,this['_inNextEdge']=((_0x297189=(_0x39ba42=_0x3ff91c[_0x1e2a13(0x169)])==null?void 0x0:_0x39ba42[_0x1e2a13(0x10a)])==null?void 0x0:_0x297189[_0x1e2a13(0x193)])===_0x1e2a13(0x11d),this[_0x1e2a13(0x1b1)]=!((_0x1d4b2e=(_0x1decfd=this[_0x1e2a13(0x13f)][_0x1e2a13(0x169)])==null?void 0x0:_0x1decfd[_0x1e2a13(0x12a)])!=null&&_0x1d4b2e['node'])&&!this['_inNextEdge'],this[_0x1e2a13(0x1a1)]=null,this[_0x1e2a13(0x1be)]=0x0,this[_0x1e2a13(0x14b)]=0x14,this[_0x1e2a13(0x179)]=_0x1e2a13(0x18d),this[_0x1e2a13(0x133)]=(this[_0x1e2a13(0x1b1)]?_0x1e2a13(0x15d):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}z[_0x54cc26(0x18a)][_0x54cc26(0x1c5)]=async function(){var _0x2c61ab=_0x54cc26,_0x3e4a2e,_0x25368c;if(this['_WebSocketClass'])return this['_WebSocketClass'];let _0x4cbaf9;if(this[_0x2c61ab(0x1b1)]||this['_inNextEdge'])_0x4cbaf9=this[_0x2c61ab(0x13f)][_0x2c61ab(0x1b5)];else{if((_0x3e4a2e=this[_0x2c61ab(0x13f)][_0x2c61ab(0x169)])!=null&&_0x3e4a2e[_0x2c61ab(0x113)])_0x4cbaf9=(_0x25368c=this[_0x2c61ab(0x13f)][_0x2c61ab(0x169)])==null?void 0x0:_0x25368c[_0x2c61ab(0x113)];else try{_0x4cbaf9=(await new Function(_0x2c61ab(0xc7),_0x2c61ab(0x1b3),_0x2c61ab(0x164),_0x2c61ab(0x1c1))(await(0x0,eval)(_0x2c61ab(0x190)),await(0x0,eval)(_0x2c61ab(0xec)),this[_0x2c61ab(0x164)]))[_0x2c61ab(0x1a4)];}catch{try{_0x4cbaf9=require(require('path')[_0x2c61ab(0x15c)](this[_0x2c61ab(0x164)],'ws'));}catch{throw new Error(_0x2c61ab(0x126));}}}return this[_0x2c61ab(0x1a1)]=_0x4cbaf9,_0x4cbaf9;},z[_0x54cc26(0x18a)]['_connectToHostNow']=function(){var _0x442129=_0x54cc26;this['_connecting']||this['_connected']||this[_0x442129(0x1be)]>=this[_0x442129(0x14b)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x442129(0x125)]=!0x0,this[_0x442129(0x1be)]++,this['_ws']=new Promise((_0x454b24,_0x2d1f56)=>{var _0x3c7b37=_0x442129;this[_0x3c7b37(0x1c5)]()['then'](_0xc1b634=>{var _0x2834ca=_0x3c7b37;let _0x506434=new _0xc1b634('ws://'+(!this[_0x2834ca(0x1b1)]&&this[_0x2834ca(0x150)]?_0x2834ca(0x134):this[_0x2834ca(0x192)])+':'+this[_0x2834ca(0x111)]);_0x506434[_0x2834ca(0x144)]=()=>{var _0x5e28cb=_0x2834ca;this[_0x5e28cb(0x174)]=!0x1,this[_0x5e28cb(0x147)](_0x506434),this[_0x5e28cb(0x13c)](),_0x2d1f56(new Error(_0x5e28cb(0x1c4)));},_0x506434['onopen']=()=>{var _0x49bdba=_0x2834ca;this[_0x49bdba(0x1b1)]||_0x506434[_0x49bdba(0x13d)]&&_0x506434[_0x49bdba(0x13d)][_0x49bdba(0x15b)]&&_0x506434[_0x49bdba(0x13d)][_0x49bdba(0x15b)](),_0x454b24(_0x506434);},_0x506434['onclose']=()=>{var _0x15ef95=_0x2834ca;this[_0x15ef95(0x182)]=!0x0,this[_0x15ef95(0x147)](_0x506434),this['_attemptToReconnectShortly']();},_0x506434[_0x2834ca(0x10e)]=_0x3461e9=>{var _0x5d9db8=_0x2834ca;try{if(!(_0x3461e9!=null&&_0x3461e9[_0x5d9db8(0xca)])||!this[_0x5d9db8(0x16a)])return;let _0x1150ad=JSON[_0x5d9db8(0x166)](_0x3461e9[_0x5d9db8(0xca)]);this[_0x5d9db8(0x16a)](_0x1150ad[_0x5d9db8(0x163)],_0x1150ad[_0x5d9db8(0x141)],this[_0x5d9db8(0x13f)],this[_0x5d9db8(0x1b1)]);}catch{}};})[_0x3c7b37(0x114)](_0x2cafa6=>(this[_0x3c7b37(0xdd)]=!0x0,this[_0x3c7b37(0x125)]=!0x1,this[_0x3c7b37(0x182)]=!0x1,this[_0x3c7b37(0x174)]=!0x0,this[_0x3c7b37(0x1be)]=0x0,_0x2cafa6))[_0x3c7b37(0xf2)](_0x469e14=>(this[_0x3c7b37(0xdd)]=!0x1,this[_0x3c7b37(0x125)]=!0x1,console[_0x3c7b37(0x124)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x3c7b37(0x179)]),_0x2d1f56(new Error(_0x3c7b37(0xd1)+(_0x469e14&&_0x469e14[_0x3c7b37(0x188)])))));}));},z['prototype']['_disposeWebsocket']=function(_0x2849e3){var _0x2764c2=_0x54cc26;this[_0x2764c2(0xdd)]=!0x1,this[_0x2764c2(0x125)]=!0x1;try{_0x2849e3['onclose']=null,_0x2849e3[_0x2764c2(0x144)]=null,_0x2849e3['onopen']=null;}catch{}try{_0x2849e3[_0x2764c2(0x1ca)]<0x2&&_0x2849e3['close']();}catch{}},z[_0x54cc26(0x18a)]['_attemptToReconnectShortly']=function(){var _0x4b9fe0=_0x54cc26;clearTimeout(this[_0x4b9fe0(0xe3)]),!(this[_0x4b9fe0(0x1be)]>=this['_maxConnectAttemptCount'])&&(this[_0x4b9fe0(0xe3)]=setTimeout(()=>{var _0x3f71bc=_0x4b9fe0,_0x4f1396;this[_0x3f71bc(0xdd)]||this[_0x3f71bc(0x125)]||(this[_0x3f71bc(0xf0)](),(_0x4f1396=this[_0x3f71bc(0x194)])==null||_0x4f1396[_0x3f71bc(0xf2)](()=>this[_0x3f71bc(0x13c)]()));},0x1f4),this[_0x4b9fe0(0xe3)]['unref']&&this[_0x4b9fe0(0xe3)]['unref']());},z['prototype']['send']=async function(_0x1d08e5){var _0x4d9680=_0x54cc26;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x4d9680(0xf0)](),(await this[_0x4d9680(0x194)])[_0x4d9680(0x17d)](JSON['stringify'](_0x1d08e5));}catch(_0x15826e){this[_0x4d9680(0x143)]?console[_0x4d9680(0x124)](this['_sendErrorMessage']+':\\x20'+(_0x15826e&&_0x15826e['message'])):(this[_0x4d9680(0x143)]=!0x0,console[_0x4d9680(0x124)](this[_0x4d9680(0x133)]+':\\x20'+(_0x15826e&&_0x15826e[_0x4d9680(0x188)]),_0x1d08e5)),this[_0x4d9680(0x174)]=!0x1,this['_attemptToReconnectShortly']();}};function H(_0xaac806,_0x5ed5cc,_0x320235,_0x41fb4a,_0xb1b23a,_0x1d990d,_0x384cd6,_0x1ac656=ne){var _0x31e34b=_0x54cc26;let _0x134f7c=_0x320235[_0x31e34b(0x1c2)](',')[_0x31e34b(0x106)](_0x22f303=>{var _0x5a2d5a=_0x31e34b,_0x2a5e8e,_0x3fa0bd,_0xad4aad,_0x354175,_0x5817d6,_0x416e53,_0x1c19a5;try{if(!_0xaac806[_0x5a2d5a(0x1a5)]){let _0x3e5b68=((_0x3fa0bd=(_0x2a5e8e=_0xaac806[_0x5a2d5a(0x169)])==null?void 0x0:_0x2a5e8e['versions'])==null?void 0x0:_0x3fa0bd[_0x5a2d5a(0x128)])||((_0x354175=(_0xad4aad=_0xaac806[_0x5a2d5a(0x169)])==null?void 0x0:_0xad4aad[_0x5a2d5a(0x10a)])==null?void 0x0:_0x354175['NEXT_RUNTIME'])==='edge';(_0xb1b23a===_0x5a2d5a(0x129)||_0xb1b23a===_0x5a2d5a(0x135)||_0xb1b23a==='astro'||_0xb1b23a===_0x5a2d5a(0x18e))&&(_0xb1b23a+=_0x3e5b68?_0x5a2d5a(0xf4):'\\x20browser');let _0x3dcbaf='';_0xb1b23a==='react-native'&&(_0x3dcbaf=(((_0x1c19a5=(_0x416e53=(_0x5817d6=_0xaac806['expo'])==null?void 0x0:_0x5817d6['modules'])==null?void 0x0:_0x416e53[_0x5a2d5a(0x1a2)])==null?void 0x0:_0x1c19a5['osName'])||'')['toLowerCase'](),_0x3dcbaf&&(_0xb1b23a+='\\x20'+_0x3dcbaf,_0x3dcbaf===_0x5a2d5a(0x1a8)&&(_0x5ed5cc=_0x5a2d5a(0x108)))),_0xaac806[_0x5a2d5a(0x1a5)]={'id':+new Date(),'tool':_0xb1b23a},_0x384cd6&&_0xb1b23a&&!_0x3e5b68&&(_0x3dcbaf?console[_0x5a2d5a(0x116)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x3dcbaf+_0x5a2d5a(0xda)):console[_0x5a2d5a(0x116)]('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0xb1b23a[_0x5a2d5a(0x11e)](0x0)[_0x5a2d5a(0x1b6)]()+_0xb1b23a[_0x5a2d5a(0x172)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x5a2d5a(0x170)));}let _0x31b88=new z(_0xaac806,_0x5ed5cc,_0x22f303,_0x41fb4a,_0x1d990d,_0x1ac656);return _0x31b88['send']['bind'](_0x31b88);}catch(_0x1dd37f){return console['warn'](_0x5a2d5a(0xf8),_0x1dd37f&&_0x1dd37f['message']),()=>{};}});return _0x1bab8d=>_0x134f7c['forEach'](_0xf9f6fe=>_0xf9f6fe(_0x1bab8d));}function ne(_0x215577,_0x1d2815,_0x27483d,_0x2f114f){var _0xdebb60=_0x54cc26;_0x2f114f&&_0x215577===_0xdebb60(0x13e)&&_0x27483d[_0xdebb60(0x101)][_0xdebb60(0x13e)]();}function b(_0x4bf85c){var _0x402023=_0x54cc26,_0x39f3be,_0x1b82fe;let _0xcdf938=function(_0x5b8299,_0x5b1c4e){return _0x5b1c4e-_0x5b8299;},_0xa22518;if(_0x4bf85c[_0x402023(0x100)])_0xa22518=function(){var _0x1b3c2a=_0x402023;return _0x4bf85c[_0x1b3c2a(0x100)][_0x1b3c2a(0x1a6)]();};else{if(_0x4bf85c[_0x402023(0x169)]&&_0x4bf85c[_0x402023(0x169)][_0x402023(0xde)]&&((_0x1b82fe=(_0x39f3be=_0x4bf85c[_0x402023(0x169)])==null?void 0x0:_0x39f3be[_0x402023(0x10a)])==null?void 0x0:_0x1b82fe['NEXT_RUNTIME'])!==_0x402023(0x11d))_0xa22518=function(){var _0xdb951a=_0x402023;return _0x4bf85c[_0xdb951a(0x169)][_0xdb951a(0xde)]();},_0xcdf938=function(_0xbcdac7,_0x1f8e63){return 0x3e8*(_0x1f8e63[0x0]-_0xbcdac7[0x0])+(_0x1f8e63[0x1]-_0xbcdac7[0x1])/0xf4240;};else try{let {performance:_0x4cdf5e}=require('perf_hooks');_0xa22518=function(){var _0x194844=_0x402023;return _0x4cdf5e[_0x194844(0x1a6)]();};}catch{_0xa22518=function(){return+new Date();};}}return{'elapsed':_0xcdf938,'timeStamp':_0xa22518,'now':()=>Date[_0x402023(0x1a6)]()};}function X(_0x59955b,_0x3967e7,_0x2cce88){var _0x4215b2=_0x54cc26,_0x244b03,_0x3c8740,_0x47936d,_0x52231b,_0x3b5f0a,_0x4a40d4,_0x5240c0,_0x4c6114,_0xd96b4;if(_0x59955b[_0x4215b2(0xfa)]!==void 0x0)return _0x59955b[_0x4215b2(0xfa)];let _0xf3157d=((_0x3c8740=(_0x244b03=_0x59955b['process'])==null?void 0x0:_0x244b03[_0x4215b2(0x12a)])==null?void 0x0:_0x3c8740['node'])||((_0x52231b=(_0x47936d=_0x59955b[_0x4215b2(0x169)])==null?void 0x0:_0x47936d['env'])==null?void 0x0:_0x52231b[_0x4215b2(0x193)])===_0x4215b2(0x11d),_0x3b4db8=!!(_0x2cce88===_0x4215b2(0xd6)&&((_0x5240c0=(_0x4a40d4=(_0x3b5f0a=_0x59955b[_0x4215b2(0xcd)])==null?void 0x0:_0x3b5f0a[_0x4215b2(0x160)])==null?void 0x0:_0x4a40d4[_0x4215b2(0x1a2)])==null?void 0x0:_0x5240c0['osName']));function _0x2b6750(_0x48746a){var _0x18b065=_0x4215b2;if(_0x48746a['startsWith']('/')&&_0x48746a[_0x18b065(0x140)]('/')){let _0x45480e=new RegExp(_0x48746a[_0x18b065(0x162)](0x1,-0x1));return _0x496074=>_0x45480e['test'](_0x496074);}else{if(_0x48746a['includes']('*')||_0x48746a[_0x18b065(0x153)]('?')){let _0x3c8416=new RegExp('^'+_0x48746a[_0x18b065(0x154)](/\\./g,String['fromCharCode'](0x5c)+'.')[_0x18b065(0x154)](/\\*/g,'.*')[_0x18b065(0x154)](/\\?/g,'.')+String['fromCharCode'](0x24));return _0x472a9d=>_0x3c8416[_0x18b065(0x10f)](_0x472a9d);}else return _0x2615bb=>_0x2615bb===_0x48746a;}}let _0x1eca1e=_0x3967e7[_0x4215b2(0x106)](_0x2b6750);return _0x59955b['_consoleNinjaAllowedToStart']=_0xf3157d||!_0x3967e7,!_0x59955b[_0x4215b2(0xfa)]&&((_0x4c6114=_0x59955b[_0x4215b2(0x101)])==null?void 0x0:_0x4c6114[_0x4215b2(0x183)])&&(_0x59955b[_0x4215b2(0xfa)]=_0x1eca1e['some'](_0x3ccb07=>_0x3ccb07(_0x59955b['location'][_0x4215b2(0x183)]))),_0x3b4db8&&!_0x59955b[_0x4215b2(0xfa)]&&!((_0xd96b4=_0x59955b[_0x4215b2(0x101)])!=null&&_0xd96b4[_0x4215b2(0x183)])&&(_0x59955b[_0x4215b2(0xfa)]=!0x0),_0x59955b['_consoleNinjaAllowedToStart'];}function J(_0x31f20b,_0x5c577b,_0x1f3bee,_0x4a0483,_0x469d82,_0x2514c8){var _0x4934b8=_0x54cc26;_0x31f20b=_0x31f20b,_0x5c577b=_0x5c577b,_0x1f3bee=_0x1f3bee,_0x4a0483=_0x4a0483,_0x469d82=_0x469d82,_0x469d82=_0x469d82||{},_0x469d82[_0x4934b8(0x1cc)]=_0x469d82[_0x4934b8(0x1cc)]||{},_0x469d82['reducedLimits']=_0x469d82[_0x4934b8(0x138)]||{},_0x469d82[_0x4934b8(0xe2)]=_0x469d82[_0x4934b8(0xe2)]||{},_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x1cb)]=_0x469d82[_0x4934b8(0xe2)]['perLogpoint']||{},_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x13f)]=_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x13f)]||{};let _0x141946={'perLogpoint':{'reduceOnCount':_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x1cb)][_0x4934b8(0x12d)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x469d82[_0x4934b8(0xe2)]['perLogpoint']['reduceOnAccumulatedProcessingTimeMs']||0x64,'resetWhenQuietMs':_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x1cb)][_0x4934b8(0xe6)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x469d82[_0x4934b8(0xe2)]['perLogpoint'][_0x4934b8(0x1b0)]||0x64},'global':{'reduceOnCount':_0x469d82[_0x4934b8(0xe2)]['global'][_0x4934b8(0x12d)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x13f)]['reduceOnAccumulatedProcessingTimeMs']||0x12c,'resetWhenQuietMs':_0x469d82['reducePolicy'][_0x4934b8(0x13f)][_0x4934b8(0xe6)]||0x32,'resetOnProcessingTimeAverageMs':_0x469d82[_0x4934b8(0xe2)][_0x4934b8(0x13f)]['resetOnProcessingTimeAverageMs']||0x64}},_0x42f773=b(_0x31f20b),_0x42fb36=_0x42f773[_0x4934b8(0x168)],_0x223738=_0x42f773[_0x4934b8(0xd0)];function _0x568c0c(){var _0x1fa2cb=_0x4934b8;this[_0x1fa2cb(0x13a)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1fa2cb(0x109)]=/^(0|[1-9][0-9]*)$/,this[_0x1fa2cb(0x159)]=/'([^\\\\']|\\\\')*'/,this[_0x1fa2cb(0x12f)]=_0x31f20b[_0x1fa2cb(0xc5)],this[_0x1fa2cb(0x161)]=_0x31f20b[_0x1fa2cb(0x1ab)],this[_0x1fa2cb(0xcf)]=Object[_0x1fa2cb(0x11a)],this[_0x1fa2cb(0x17a)]=Object[_0x1fa2cb(0x14e)],this[_0x1fa2cb(0x178)]=_0x31f20b[_0x1fa2cb(0x19f)],this[_0x1fa2cb(0xd5)]=RegExp[_0x1fa2cb(0x18a)][_0x1fa2cb(0xdf)],this[_0x1fa2cb(0x132)]=Date[_0x1fa2cb(0x18a)][_0x1fa2cb(0xdf)];}_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x158)]=function(_0x48d78e,_0x348dcf,_0x4a6d96,_0x5a5f89){var _0x19e5e6=_0x4934b8,_0xc6b12f=this,_0x55a7d2=_0x4a6d96['autoExpand'];function _0x42e97b(_0x3952f9,_0x2bc656,_0x8c85ef){var _0x2f1a2f=_0x4a90;_0x2bc656[_0x2f1a2f(0x151)]=_0x2f1a2f(0x16e),_0x2bc656[_0x2f1a2f(0x1bb)]=_0x3952f9[_0x2f1a2f(0x188)],_0x2b7b1a=_0x8c85ef[_0x2f1a2f(0x128)][_0x2f1a2f(0xea)],_0x8c85ef['node'][_0x2f1a2f(0xea)]=_0x2bc656,_0xc6b12f[_0x2f1a2f(0xc8)](_0x2bc656,_0x8c85ef);}let _0xcd7ba5,_0x5307f1,_0x34239a=_0x31f20b[_0x19e5e6(0xd9)];_0x31f20b[_0x19e5e6(0xd9)]=!0x0,_0x31f20b['console']&&(_0xcd7ba5=_0x31f20b[_0x19e5e6(0x176)]['error'],_0x5307f1=_0x31f20b[_0x19e5e6(0x176)][_0x19e5e6(0x124)],_0xcd7ba5&&(_0x31f20b[_0x19e5e6(0x176)][_0x19e5e6(0x1bb)]=function(){}),_0x5307f1&&(_0x31f20b[_0x19e5e6(0x176)][_0x19e5e6(0x124)]=function(){}));try{try{_0x4a6d96[_0x19e5e6(0x115)]++,_0x4a6d96[_0x19e5e6(0x104)]&&_0x4a6d96['autoExpandPreviousObjects'][_0x19e5e6(0xff)](_0x348dcf);var _0x6adee3,_0xa868ce,_0x4c1789,_0x127a28,_0x1bef2c=[],_0x4dd8f0=[],_0x47c5d8,_0x18b1eb=this[_0x19e5e6(0x1ad)](_0x348dcf),_0x481e55=_0x18b1eb==='array',_0x57133b=!0x1,_0x5ca399=_0x18b1eb===_0x19e5e6(0x196),_0xbd7d8f=this['_isPrimitiveType'](_0x18b1eb),_0x417ea6=this[_0x19e5e6(0x146)](_0x18b1eb),_0x273a7e=_0xbd7d8f||_0x417ea6,_0x2a289a={},_0xcd0938=0x0,_0x14ebf7=!0x1,_0x2b7b1a,_0x30046f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x4a6d96[_0x19e5e6(0x15f)]){if(_0x481e55){if(_0xa868ce=_0x348dcf['length'],_0xa868ce>_0x4a6d96['elements']){for(_0x4c1789=0x0,_0x127a28=_0x4a6d96['elements'],_0x6adee3=_0x4c1789;_0x6adee3<_0x127a28;_0x6adee3++)_0x4dd8f0[_0x19e5e6(0xff)](_0xc6b12f[_0x19e5e6(0xcc)](_0x1bef2c,_0x348dcf,_0x18b1eb,_0x6adee3,_0x4a6d96));_0x48d78e[_0x19e5e6(0x1b9)]=!0x0;}else{for(_0x4c1789=0x0,_0x127a28=_0xa868ce,_0x6adee3=_0x4c1789;_0x6adee3<_0x127a28;_0x6adee3++)_0x4dd8f0[_0x19e5e6(0xff)](_0xc6b12f['_addProperty'](_0x1bef2c,_0x348dcf,_0x18b1eb,_0x6adee3,_0x4a6d96));}_0x4a6d96[_0x19e5e6(0x186)]+=_0x4dd8f0[_0x19e5e6(0xfc)];}if(!(_0x18b1eb==='null'||_0x18b1eb===_0x19e5e6(0xc5))&&!_0xbd7d8f&&_0x18b1eb!==_0x19e5e6(0x1c8)&&_0x18b1eb!=='Buffer'&&_0x18b1eb!==_0x19e5e6(0xed)){var _0x482677=_0x5a5f89['props']||_0x4a6d96[_0x19e5e6(0xfd)];if(this[_0x19e5e6(0x119)](_0x348dcf)?(_0x6adee3=0x0,_0x348dcf[_0x19e5e6(0x1ba)](function(_0x316011){var _0x3d6007=_0x19e5e6;if(_0xcd0938++,_0x4a6d96[_0x3d6007(0x186)]++,_0xcd0938>_0x482677){_0x14ebf7=!0x0;return;}if(!_0x4a6d96[_0x3d6007(0x11c)]&&_0x4a6d96['autoExpand']&&_0x4a6d96[_0x3d6007(0x186)]>_0x4a6d96[_0x3d6007(0x1a7)]){_0x14ebf7=!0x0;return;}_0x4dd8f0[_0x3d6007(0xff)](_0xc6b12f[_0x3d6007(0xcc)](_0x1bef2c,_0x348dcf,_0x3d6007(0xeb),_0x6adee3++,_0x4a6d96,function(_0x2dd991){return function(){return _0x2dd991;};}(_0x316011)));})):this[_0x19e5e6(0x1a3)](_0x348dcf)&&_0x348dcf[_0x19e5e6(0x1ba)](function(_0x4e9669,_0x2865be){var _0xe99383=_0x19e5e6;if(_0xcd0938++,_0x4a6d96[_0xe99383(0x186)]++,_0xcd0938>_0x482677){_0x14ebf7=!0x0;return;}if(!_0x4a6d96[_0xe99383(0x11c)]&&_0x4a6d96[_0xe99383(0x104)]&&_0x4a6d96[_0xe99383(0x186)]>_0x4a6d96[_0xe99383(0x1a7)]){_0x14ebf7=!0x0;return;}var _0x4c2eff=_0x2865be[_0xe99383(0xdf)]();_0x4c2eff[_0xe99383(0xfc)]>0x64&&(_0x4c2eff=_0x4c2eff[_0xe99383(0x162)](0x0,0x64)+_0xe99383(0xe4)),_0x4dd8f0[_0xe99383(0xff)](_0xc6b12f[_0xe99383(0xcc)](_0x1bef2c,_0x348dcf,_0xe99383(0xd7),_0x4c2eff,_0x4a6d96,function(_0x38d848){return function(){return _0x38d848;};}(_0x4e9669)));}),!_0x57133b){try{for(_0x47c5d8 in _0x348dcf)if(!(_0x481e55&&_0x30046f[_0x19e5e6(0x10f)](_0x47c5d8))&&!this[_0x19e5e6(0xce)](_0x348dcf,_0x47c5d8,_0x4a6d96)){if(_0xcd0938++,_0x4a6d96[_0x19e5e6(0x186)]++,_0xcd0938>_0x482677){_0x14ebf7=!0x0;break;}if(!_0x4a6d96[_0x19e5e6(0x11c)]&&_0x4a6d96[_0x19e5e6(0x104)]&&_0x4a6d96[_0x19e5e6(0x186)]>_0x4a6d96[_0x19e5e6(0x1a7)]){_0x14ebf7=!0x0;break;}_0x4dd8f0['push'](_0xc6b12f[_0x19e5e6(0x117)](_0x1bef2c,_0x2a289a,_0x348dcf,_0x18b1eb,_0x47c5d8,_0x4a6d96));}}catch{}if(_0x2a289a['_p_length']=!0x0,_0x5ca399&&(_0x2a289a[_0x19e5e6(0xfe)]=!0x0),!_0x14ebf7){var _0x507ca6=[][_0x19e5e6(0x112)](this['_getOwnPropertyNames'](_0x348dcf))[_0x19e5e6(0x112)](this['_getOwnPropertySymbols'](_0x348dcf));for(_0x6adee3=0x0,_0xa868ce=_0x507ca6['length'];_0x6adee3<_0xa868ce;_0x6adee3++)if(_0x47c5d8=_0x507ca6[_0x6adee3],!(_0x481e55&&_0x30046f['test'](_0x47c5d8[_0x19e5e6(0xdf)]()))&&!this[_0x19e5e6(0xce)](_0x348dcf,_0x47c5d8,_0x4a6d96)&&!_0x2a289a[typeof _0x47c5d8!=_0x19e5e6(0x10b)?_0x19e5e6(0x17e)+_0x47c5d8[_0x19e5e6(0xdf)]():_0x47c5d8]){if(_0xcd0938++,_0x4a6d96[_0x19e5e6(0x186)]++,_0xcd0938>_0x482677){_0x14ebf7=!0x0;break;}if(!_0x4a6d96[_0x19e5e6(0x11c)]&&_0x4a6d96['autoExpand']&&_0x4a6d96[_0x19e5e6(0x186)]>_0x4a6d96[_0x19e5e6(0x1a7)]){_0x14ebf7=!0x0;break;}_0x4dd8f0[_0x19e5e6(0xff)](_0xc6b12f[_0x19e5e6(0x117)](_0x1bef2c,_0x2a289a,_0x348dcf,_0x18b1eb,_0x47c5d8,_0x4a6d96));}}}}}if(_0x48d78e['type']=_0x18b1eb,_0x273a7e?(_0x48d78e['value']=_0x348dcf[_0x19e5e6(0x122)](),this[_0x19e5e6(0x139)](_0x18b1eb,_0x48d78e,_0x4a6d96,_0x5a5f89)):_0x18b1eb===_0x19e5e6(0x103)?_0x48d78e[_0x19e5e6(0xc4)]=this[_0x19e5e6(0x132)][_0x19e5e6(0x195)](_0x348dcf):_0x18b1eb===_0x19e5e6(0xed)?_0x48d78e[_0x19e5e6(0xc4)]=_0x348dcf[_0x19e5e6(0xdf)]():_0x18b1eb===_0x19e5e6(0x142)?_0x48d78e[_0x19e5e6(0xc4)]=this[_0x19e5e6(0xd5)][_0x19e5e6(0x195)](_0x348dcf):_0x18b1eb===_0x19e5e6(0x10b)&&this[_0x19e5e6(0x178)]?_0x48d78e[_0x19e5e6(0xc4)]=this[_0x19e5e6(0x178)][_0x19e5e6(0x18a)]['toString'][_0x19e5e6(0x195)](_0x348dcf):!_0x4a6d96[_0x19e5e6(0x15f)]&&!(_0x18b1eb===_0x19e5e6(0xd3)||_0x18b1eb==='undefined')&&(delete _0x48d78e[_0x19e5e6(0xc4)],_0x48d78e[_0x19e5e6(0x1ae)]=!0x0),_0x14ebf7&&(_0x48d78e[_0x19e5e6(0x13b)]=!0x0),_0x2b7b1a=_0x4a6d96[_0x19e5e6(0x128)][_0x19e5e6(0xea)],_0x4a6d96['node'][_0x19e5e6(0xea)]=_0x48d78e,this[_0x19e5e6(0xc8)](_0x48d78e,_0x4a6d96),_0x4dd8f0['length']){for(_0x6adee3=0x0,_0xa868ce=_0x4dd8f0[_0x19e5e6(0xfc)];_0x6adee3<_0xa868ce;_0x6adee3++)_0x4dd8f0[_0x6adee3](_0x6adee3);}_0x1bef2c[_0x19e5e6(0xfc)]&&(_0x48d78e[_0x19e5e6(0xfd)]=_0x1bef2c);}catch(_0x3ae5b6){_0x42e97b(_0x3ae5b6,_0x48d78e,_0x4a6d96);}this[_0x19e5e6(0x1c9)](_0x348dcf,_0x48d78e),this[_0x19e5e6(0x136)](_0x48d78e,_0x4a6d96),_0x4a6d96['node'][_0x19e5e6(0xea)]=_0x2b7b1a,_0x4a6d96[_0x19e5e6(0x115)]--,_0x4a6d96[_0x19e5e6(0x104)]=_0x55a7d2,_0x4a6d96[_0x19e5e6(0x104)]&&_0x4a6d96[_0x19e5e6(0x1b4)]['pop']();}finally{_0xcd7ba5&&(_0x31f20b[_0x19e5e6(0x176)][_0x19e5e6(0x1bb)]=_0xcd7ba5),_0x5307f1&&(_0x31f20b[_0x19e5e6(0x176)]['warn']=_0x5307f1),_0x31f20b[_0x19e5e6(0xd9)]=_0x34239a;}return _0x48d78e;},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x12e)]=function(_0x46f99b){var _0x55ee4f=_0x4934b8;return Object['getOwnPropertySymbols']?Object[_0x55ee4f(0x16b)](_0x46f99b):[];},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x119)]=function(_0x259646){var _0x583570=_0x4934b8;return!!(_0x259646&&_0x31f20b[_0x583570(0xeb)]&&this['_objectToString'](_0x259646)===_0x583570(0x17f)&&_0x259646[_0x583570(0x1ba)]);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0xce)]=function(_0x469950,_0x43a4d0,_0x3e7028){var _0x44d134=_0x4934b8;if(!_0x3e7028[_0x44d134(0xcb)]){let _0x5e446a=this[_0x44d134(0xcf)](_0x469950,_0x43a4d0);if(_0x5e446a&&_0x5e446a[_0x44d134(0xf5)])return!0x0;}return _0x3e7028[_0x44d134(0x1bf)]?typeof _0x469950[_0x43a4d0]==_0x44d134(0x196):!0x1;},_0x568c0c[_0x4934b8(0x18a)]['_type']=function(_0x21f464){var _0x5b73d0=_0x4934b8,_0x1012e4='';return _0x1012e4=typeof _0x21f464,_0x1012e4===_0x5b73d0(0x118)?this[_0x5b73d0(0x1c7)](_0x21f464)===_0x5b73d0(0x14c)?_0x1012e4=_0x5b73d0(0xfb):this[_0x5b73d0(0x1c7)](_0x21f464)===_0x5b73d0(0x1b8)?_0x1012e4=_0x5b73d0(0x103):this[_0x5b73d0(0x1c7)](_0x21f464)===_0x5b73d0(0x149)?_0x1012e4=_0x5b73d0(0xed):_0x21f464===null?_0x1012e4='null':_0x21f464[_0x5b73d0(0x14f)]&&(_0x1012e4=_0x21f464['constructor'][_0x5b73d0(0x1c3)]||_0x1012e4):_0x1012e4===_0x5b73d0(0xc5)&&this[_0x5b73d0(0x161)]&&_0x21f464 instanceof this['_HTMLAllCollection']&&(_0x1012e4='HTMLAllCollection'),_0x1012e4;},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x1c7)]=function(_0x23706a){var _0xb5b3ca=_0x4934b8;return Object[_0xb5b3ca(0x18a)][_0xb5b3ca(0xdf)]['call'](_0x23706a);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x19d)]=function(_0x94e0c5){var _0x4b2537=_0x4934b8;return _0x94e0c5===_0x4b2537(0x157)||_0x94e0c5==='string'||_0x94e0c5===_0x4b2537(0x1b2);},_0x568c0c['prototype']['_isPrimitiveWrapperType']=function(_0x2f3e62){var _0x16ad9e=_0x4934b8;return _0x2f3e62===_0x16ad9e(0x199)||_0x2f3e62==='String'||_0x2f3e62===_0x16ad9e(0xe7);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0xcc)]=function(_0x1db57d,_0x27dec7,_0x5b27b1,_0x19ed12,_0x3015c5,_0x18e0f7){var _0x2fcbd8=this;return function(_0x2a2b77){var _0xce493a=_0x4a90,_0x174862=_0x3015c5['node'][_0xce493a(0xea)],_0x4a97c=_0x3015c5[_0xce493a(0x128)]['index'],_0x2b4936=_0x3015c5[_0xce493a(0x128)][_0xce493a(0x120)];_0x3015c5['node'][_0xce493a(0x120)]=_0x174862,_0x3015c5['node'][_0xce493a(0x14a)]=typeof _0x19ed12==_0xce493a(0x1b2)?_0x19ed12:_0x2a2b77,_0x1db57d[_0xce493a(0xff)](_0x2fcbd8[_0xce493a(0x12c)](_0x27dec7,_0x5b27b1,_0x19ed12,_0x3015c5,_0x18e0f7)),_0x3015c5[_0xce493a(0x128)][_0xce493a(0x120)]=_0x2b4936,_0x3015c5['node']['index']=_0x4a97c;};},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x117)]=function(_0x4469e5,_0x3fa37e,_0xeef05b,_0x125913,_0x2f3742,_0x36532d,_0x49d55f){var _0x516d33=_0x4934b8,_0x396018=this;return _0x3fa37e[typeof _0x2f3742!=_0x516d33(0x10b)?_0x516d33(0x17e)+_0x2f3742['toString']():_0x2f3742]=!0x0,function(_0xd7fcb0){var _0x3226db=_0x516d33,_0x39117a=_0x36532d[_0x3226db(0x128)][_0x3226db(0xea)],_0x50a11a=_0x36532d[_0x3226db(0x128)][_0x3226db(0x14a)],_0x4eb0c0=_0x36532d['node'][_0x3226db(0x120)];_0x36532d[_0x3226db(0x128)][_0x3226db(0x120)]=_0x39117a,_0x36532d['node'][_0x3226db(0x14a)]=_0xd7fcb0,_0x4469e5[_0x3226db(0xff)](_0x396018[_0x3226db(0x12c)](_0xeef05b,_0x125913,_0x2f3742,_0x36532d,_0x49d55f)),_0x36532d[_0x3226db(0x128)][_0x3226db(0x120)]=_0x4eb0c0,_0x36532d[_0x3226db(0x128)][_0x3226db(0x14a)]=_0x50a11a;};},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x12c)]=function(_0x453099,_0x4eadbd,_0x11f35a,_0x40815b,_0xa2b7cb){var _0x4b84a8=_0x4934b8,_0x5e86b1=this;_0xa2b7cb||(_0xa2b7cb=function(_0x5cea02,_0x58268c){return _0x5cea02[_0x58268c];});var _0x362525=_0x11f35a['toString'](),_0x3c06dc=_0x40815b[_0x4b84a8(0x1ce)]||{},_0x142239=_0x40815b['depth'],_0x26bf80=_0x40815b[_0x4b84a8(0x11c)];try{var _0x3aca2e=this[_0x4b84a8(0x1a3)](_0x453099),_0x4aabb3=_0x362525;_0x3aca2e&&_0x4aabb3[0x0]==='\\x27'&&(_0x4aabb3=_0x4aabb3[_0x4b84a8(0x172)](0x1,_0x4aabb3[_0x4b84a8(0xfc)]-0x2));var _0x12d722=_0x40815b['expressionsToEvaluate']=_0x3c06dc[_0x4b84a8(0x17e)+_0x4aabb3];_0x12d722&&(_0x40815b['depth']=_0x40815b['depth']+0x1),_0x40815b[_0x4b84a8(0x11c)]=!!_0x12d722;var _0x56e733=typeof _0x11f35a=='symbol',_0xa051ca={'name':_0x56e733||_0x3aca2e?_0x362525:this[_0x4b84a8(0x131)](_0x362525)};if(_0x56e733&&(_0xa051ca[_0x4b84a8(0x10b)]=!0x0),!(_0x4eadbd===_0x4b84a8(0xfb)||_0x4eadbd===_0x4b84a8(0x11b))){var _0x5b5697=this[_0x4b84a8(0xcf)](_0x453099,_0x11f35a);if(_0x5b5697&&(_0x5b5697[_0x4b84a8(0x185)]&&(_0xa051ca['setter']=!0x0),_0x5b5697[_0x4b84a8(0xf5)]&&!_0x12d722&&!_0x40815b[_0x4b84a8(0xcb)]))return _0xa051ca[_0x4b84a8(0x17b)]=!0x0,this[_0x4b84a8(0x1a0)](_0xa051ca,_0x40815b),_0xa051ca;}var _0x51fae3;try{_0x51fae3=_0xa2b7cb(_0x453099,_0x11f35a);}catch(_0x4f78cc){return _0xa051ca={'name':_0x362525,'type':_0x4b84a8(0x16e),'error':_0x4f78cc[_0x4b84a8(0x188)]},this[_0x4b84a8(0x1a0)](_0xa051ca,_0x40815b),_0xa051ca;}var _0x310e5a=this['_type'](_0x51fae3),_0x3e58ae=this[_0x4b84a8(0x19d)](_0x310e5a);if(_0xa051ca['type']=_0x310e5a,_0x3e58ae)this[_0x4b84a8(0x1a0)](_0xa051ca,_0x40815b,_0x51fae3,function(){var _0x2623ba=_0x4b84a8;_0xa051ca[_0x2623ba(0xc4)]=_0x51fae3['valueOf'](),!_0x12d722&&_0x5e86b1[_0x2623ba(0x139)](_0x310e5a,_0xa051ca,_0x40815b,{});});else{var _0x87c7d8=_0x40815b[_0x4b84a8(0x104)]&&_0x40815b[_0x4b84a8(0x115)]<_0x40815b[_0x4b84a8(0x189)]&&_0x40815b[_0x4b84a8(0x1b4)][_0x4b84a8(0x121)](_0x51fae3)<0x0&&_0x310e5a!==_0x4b84a8(0x196)&&_0x40815b['autoExpandPropertyCount']<_0x40815b[_0x4b84a8(0x1a7)];_0x87c7d8||_0x40815b[_0x4b84a8(0x115)]<_0x142239||_0x12d722?this['serialize'](_0xa051ca,_0x51fae3,_0x40815b,_0x12d722||{}):this[_0x4b84a8(0x1a0)](_0xa051ca,_0x40815b,_0x51fae3,function(){var _0x48a268=_0x4b84a8;_0x310e5a===_0x48a268(0xd3)||_0x310e5a===_0x48a268(0xc5)||(delete _0xa051ca[_0x48a268(0xc4)],_0xa051ca['capped']=!0x0);});}return _0xa051ca;}finally{_0x40815b[_0x4b84a8(0x1ce)]=_0x3c06dc,_0x40815b[_0x4b84a8(0x15f)]=_0x142239,_0x40815b[_0x4b84a8(0x11c)]=_0x26bf80;}},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x139)]=function(_0x5e0732,_0x1bfe86,_0xda28d7,_0x491a14){var _0x60e05=_0x4934b8,_0x33f831=_0x491a14[_0x60e05(0x110)]||_0xda28d7[_0x60e05(0x110)];if((_0x5e0732===_0x60e05(0x1a9)||_0x5e0732==='String')&&_0x1bfe86['value']){let _0x1eacb7=_0x1bfe86[_0x60e05(0xc4)][_0x60e05(0xfc)];_0xda28d7['allStrLength']+=_0x1eacb7,_0xda28d7[_0x60e05(0xd4)]>_0xda28d7[_0x60e05(0x191)]?(_0x1bfe86['capped']='',delete _0x1bfe86[_0x60e05(0xc4)]):_0x1eacb7>_0x33f831&&(_0x1bfe86[_0x60e05(0x1ae)]=_0x1bfe86[_0x60e05(0xc4)][_0x60e05(0x172)](0x0,_0x33f831),delete _0x1bfe86[_0x60e05(0xc4)]);}},_0x568c0c['prototype']['_isMap']=function(_0x251695){var _0x2d4790=_0x4934b8;return!!(_0x251695&&_0x31f20b[_0x2d4790(0xd7)]&&this[_0x2d4790(0x1c7)](_0x251695)===_0x2d4790(0x16d)&&_0x251695['forEach']);},_0x568c0c[_0x4934b8(0x18a)]['_propertyName']=function(_0x2e0688){var _0x2c8644=_0x4934b8;if(_0x2e0688[_0x2c8644(0x11f)](/^\\d+$/))return _0x2e0688;var _0x91094;try{_0x91094=JSON[_0x2c8644(0x175)](''+_0x2e0688);}catch{_0x91094='\\x22'+this['_objectToString'](_0x2e0688)+'\\x22';}return _0x91094[_0x2c8644(0x11f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x91094=_0x91094['substr'](0x1,_0x91094[_0x2c8644(0xfc)]-0x2):_0x91094=_0x91094[_0x2c8644(0x154)](/'/g,'\\x5c\\x27')[_0x2c8644(0x154)](/\\\\\"/g,'\\x22')[_0x2c8644(0x154)](/(^\"|\"$)/g,'\\x27'),_0x91094;},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x1a0)]=function(_0x232cbb,_0x29085f,_0x1650af,_0x1c890e){var _0x16a2a5=_0x4934b8;this[_0x16a2a5(0xc8)](_0x232cbb,_0x29085f),_0x1c890e&&_0x1c890e(),this[_0x16a2a5(0x1c9)](_0x1650af,_0x232cbb),this[_0x16a2a5(0x136)](_0x232cbb,_0x29085f);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0xc8)]=function(_0x49291a,_0x33bdc6){var _0x52d41e=_0x4934b8;this[_0x52d41e(0x127)](_0x49291a,_0x33bdc6),this['_setNodeQueryPath'](_0x49291a,_0x33bdc6),this[_0x52d41e(0x15a)](_0x49291a,_0x33bdc6),this[_0x52d41e(0xe0)](_0x49291a,_0x33bdc6);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x127)]=function(_0x3ffba9,_0x308291){},_0x568c0c[_0x4934b8(0x18a)]['_setNodeQueryPath']=function(_0x4befcf,_0x340320){},_0x568c0c['prototype'][_0x4934b8(0x19c)]=function(_0x6d004b,_0x3e0efe){},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x19e)]=function(_0x3b2948){var _0x1c5336=_0x4934b8;return _0x3b2948===this[_0x1c5336(0x12f)];},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x136)]=function(_0x571a40,_0x11152b){var _0x17c82d=_0x4934b8;this[_0x17c82d(0x19c)](_0x571a40,_0x11152b),this[_0x17c82d(0x16c)](_0x571a40),_0x11152b['sortProps']&&this[_0x17c82d(0x1af)](_0x571a40),this['_addFunctionsNode'](_0x571a40,_0x11152b),this['_addLoadNode'](_0x571a40,_0x11152b),this['_cleanNode'](_0x571a40);},_0x568c0c[_0x4934b8(0x18a)]['_additionalMetadata']=function(_0x25d425,_0x376ba0){var _0x4c6175=_0x4934b8;try{_0x25d425&&typeof _0x25d425[_0x4c6175(0xfc)]==_0x4c6175(0x1b2)&&(_0x376ba0[_0x4c6175(0xfc)]=_0x25d425[_0x4c6175(0xfc)]);}catch{}if(_0x376ba0[_0x4c6175(0x151)]===_0x4c6175(0x1b2)||_0x376ba0['type']===_0x4c6175(0xe7)){if(isNaN(_0x376ba0['value']))_0x376ba0[_0x4c6175(0xe5)]=!0x0,delete _0x376ba0[_0x4c6175(0xc4)];else switch(_0x376ba0[_0x4c6175(0xc4)]){case Number[_0x4c6175(0x102)]:_0x376ba0[_0x4c6175(0x130)]=!0x0,delete _0x376ba0['value'];break;case Number[_0x4c6175(0xf6)]:_0x376ba0[_0x4c6175(0x184)]=!0x0,delete _0x376ba0['value'];break;case 0x0:this['_isNegativeZero'](_0x376ba0['value'])&&(_0x376ba0[_0x4c6175(0xc3)]=!0x0);break;}}else _0x376ba0['type']==='function'&&typeof _0x25d425[_0x4c6175(0x1c3)]=='string'&&_0x25d425['name']&&_0x376ba0[_0x4c6175(0x1c3)]&&_0x25d425[_0x4c6175(0x1c3)]!==_0x376ba0[_0x4c6175(0x1c3)]&&(_0x376ba0[_0x4c6175(0x145)]=_0x25d425[_0x4c6175(0x1c3)]);},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x187)]=function(_0x3d5c0c){var _0x21909c=_0x4934b8;return 0x1/_0x3d5c0c===Number[_0x21909c(0xf6)];},_0x568c0c['prototype'][_0x4934b8(0x1af)]=function(_0xaf6d85){var _0x257f6e=_0x4934b8;!_0xaf6d85[_0x257f6e(0xfd)]||!_0xaf6d85['props'][_0x257f6e(0xfc)]||_0xaf6d85[_0x257f6e(0x151)]===_0x257f6e(0xfb)||_0xaf6d85[_0x257f6e(0x151)]===_0x257f6e(0xd7)||_0xaf6d85[_0x257f6e(0x151)]==='Set'||_0xaf6d85[_0x257f6e(0xfd)][_0x257f6e(0xee)](function(_0xcc5a49,_0x33a07){var _0x3d0ac0=_0x257f6e,_0x216c86=_0xcc5a49[_0x3d0ac0(0x1c3)][_0x3d0ac0(0x1bd)](),_0x52e92d=_0x33a07[_0x3d0ac0(0x1c3)][_0x3d0ac0(0x1bd)]();return _0x216c86<_0x52e92d?-0x1:_0x216c86>_0x52e92d?0x1:0x0;});},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0x18c)]=function(_0x26dd9a,_0x367b0a){var _0x3fb806=_0x4934b8;if(!(_0x367b0a[_0x3fb806(0x1bf)]||!_0x26dd9a['props']||!_0x26dd9a[_0x3fb806(0xfd)]['length'])){for(var _0x558538=[],_0x1e34a7=[],_0x4cf6c3=0x0,_0x496b22=_0x26dd9a[_0x3fb806(0xfd)]['length'];_0x4cf6c3<_0x496b22;_0x4cf6c3++){var _0x286ad8=_0x26dd9a[_0x3fb806(0xfd)][_0x4cf6c3];_0x286ad8[_0x3fb806(0x151)]===_0x3fb806(0x196)?_0x558538[_0x3fb806(0xff)](_0x286ad8):_0x1e34a7[_0x3fb806(0xff)](_0x286ad8);}if(!(!_0x1e34a7[_0x3fb806(0xfc)]||_0x558538[_0x3fb806(0xfc)]<=0x1)){_0x26dd9a[_0x3fb806(0xfd)]=_0x1e34a7;var _0x589572={'functionsNode':!0x0,'props':_0x558538};this[_0x3fb806(0x127)](_0x589572,_0x367b0a),this[_0x3fb806(0x19c)](_0x589572,_0x367b0a),this['_setNodeExpandableState'](_0x589572),this[_0x3fb806(0xe0)](_0x589572,_0x367b0a),_0x589572['id']+='\\x20f',_0x26dd9a['props'][_0x3fb806(0x1ac)](_0x589572);}}},_0x568c0c['prototype'][_0x4934b8(0xf9)]=function(_0x3a8156,_0x31dbc6){},_0x568c0c['prototype']['_setNodeExpandableState']=function(_0x27a91c){},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0xdc)]=function(_0x309bc7){var _0x3eff3d=_0x4934b8;return Array[_0x3eff3d(0x173)](_0x309bc7)||typeof _0x309bc7=='object'&&this['_objectToString'](_0x309bc7)==='[object\\x20Array]';},_0x568c0c[_0x4934b8(0x18a)]['_setNodePermissions']=function(_0x33a0fd,_0x133d76){},_0x568c0c[_0x4934b8(0x18a)][_0x4934b8(0xef)]=function(_0xd4834e){var _0x4c0797=_0x4934b8;delete _0xd4834e[_0x4c0797(0xe9)],delete _0xd4834e[_0x4c0797(0xf3)],delete _0xd4834e[_0x4c0797(0x1b7)];},_0x568c0c[_0x4934b8(0x18a)]['_setNodeExpressionPath']=function(_0x82227e,_0x5e328e){};let _0x4277ae=new _0x568c0c(),_0x578392={'props':_0x469d82[_0x4934b8(0x1cc)][_0x4934b8(0xfd)]||0x64,'elements':_0x469d82[_0x4934b8(0x1cc)]['elements']||0x64,'strLength':_0x469d82['defaultLimits']['strLength']||0x400*0x32,'totalStrLength':_0x469d82['defaultLimits'][_0x4934b8(0x191)]||0x400*0x32,'autoExpandLimit':_0x469d82['defaultLimits']['autoExpandLimit']||0x1388,'autoExpandMaxDepth':_0x469d82[_0x4934b8(0x1cc)]['autoExpandMaxDepth']||0xa},_0x1f746a={'props':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0xfd)]||0x5,'elements':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0xd2)]||0x5,'strLength':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0x110)]||0x100,'totalStrLength':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0x191)]||0x100*0x3,'autoExpandLimit':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0x1a7)]||0x1e,'autoExpandMaxDepth':_0x469d82[_0x4934b8(0x138)][_0x4934b8(0x189)]||0x2};if(_0x2514c8){let _0x31c1e0=_0x4277ae['serialize'][_0x4934b8(0xf1)](_0x4277ae);_0x4277ae[_0x4934b8(0x158)]=function(_0x1957c4,_0xc0aeb7,_0x4ead78,_0x3625d6){return _0x31c1e0(_0x1957c4,_0x2514c8(_0xc0aeb7),_0x4ead78,_0x3625d6);};}function _0x1e6d74(_0x5afffa,_0x4a459c,_0x275938,_0x334fd3,_0x45c8dc,_0x17015d){var _0x490e67=_0x4934b8;let _0x97a821,_0x4538cb;try{_0x4538cb=_0x223738(),_0x97a821=_0x1f3bee[_0x4a459c],!_0x97a821||_0x4538cb-_0x97a821['ts']>_0x141946[_0x490e67(0x1cb)][_0x490e67(0xe6)]&&_0x97a821[_0x490e67(0x180)]&&_0x97a821['time']/_0x97a821[_0x490e67(0x180)]<_0x141946[_0x490e67(0x1cb)][_0x490e67(0x1b0)]?(_0x1f3bee[_0x4a459c]=_0x97a821={'count':0x0,'time':0x0,'ts':_0x4538cb},_0x1f3bee[_0x490e67(0x1cd)]={}):_0x4538cb-_0x1f3bee[_0x490e67(0x1cd)]['ts']>_0x141946[_0x490e67(0x13f)][_0x490e67(0xe6)]&&_0x1f3bee[_0x490e67(0x1cd)][_0x490e67(0x180)]&&_0x1f3bee['hits']['time']/_0x1f3bee['hits']['count']<_0x141946[_0x490e67(0x13f)]['resetOnProcessingTimeAverageMs']&&(_0x1f3bee[_0x490e67(0x1cd)]={});let _0x7ce882=[],_0x3afea7=_0x97a821['reduceLimits']||_0x1f3bee['hits']['reduceLimits']?_0x1f746a:_0x578392,_0x204f3a=_0x4e76b9=>{var _0x2f14d5=_0x490e67;let _0x5cb8da={};return _0x5cb8da[_0x2f14d5(0xfd)]=_0x4e76b9['props'],_0x5cb8da['elements']=_0x4e76b9[_0x2f14d5(0xd2)],_0x5cb8da[_0x2f14d5(0x110)]=_0x4e76b9[_0x2f14d5(0x110)],_0x5cb8da[_0x2f14d5(0x191)]=_0x4e76b9['totalStrLength'],_0x5cb8da['autoExpandLimit']=_0x4e76b9[_0x2f14d5(0x1a7)],_0x5cb8da[_0x2f14d5(0x189)]=_0x4e76b9[_0x2f14d5(0x189)],_0x5cb8da['sortProps']=!0x1,_0x5cb8da[_0x2f14d5(0x1bf)]=!_0x5c577b,_0x5cb8da[_0x2f14d5(0x15f)]=0x1,_0x5cb8da[_0x2f14d5(0x115)]=0x0,_0x5cb8da['expId']='root_exp_id',_0x5cb8da[_0x2f14d5(0xc6)]=_0x2f14d5(0x10d),_0x5cb8da[_0x2f14d5(0x104)]=!0x0,_0x5cb8da[_0x2f14d5(0x1b4)]=[],_0x5cb8da[_0x2f14d5(0x186)]=0x0,_0x5cb8da['resolveGetters']=_0x469d82[_0x2f14d5(0xcb)],_0x5cb8da[_0x2f14d5(0xd4)]=0x0,_0x5cb8da[_0x2f14d5(0x128)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5cb8da;};for(var _0x7432f7=0x0;_0x7432f7<_0x45c8dc['length'];_0x7432f7++)_0x7ce882[_0x490e67(0xff)](_0x4277ae[_0x490e67(0x158)]({'timeNode':_0x5afffa===_0x490e67(0x15e)||void 0x0},_0x45c8dc[_0x7432f7],_0x204f3a(_0x3afea7),{}));if(_0x5afffa===_0x490e67(0x17c)||_0x5afffa===_0x490e67(0x1bb)){let _0x5b3615=Error[_0x490e67(0x16f)];try{Error['stackTraceLimit']=0x1/0x0,_0x7ce882['push'](_0x4277ae[_0x490e67(0x158)]({'stackNode':!0x0},new Error()[_0x490e67(0x123)],_0x204f3a(_0x3afea7),{'strLength':0x1/0x0}));}finally{Error[_0x490e67(0x16f)]=_0x5b3615;}}return{'method':_0x490e67(0x116),'version':_0x4a0483,'args':[{'ts':_0x275938,'session':_0x334fd3,'args':_0x7ce882,'id':_0x4a459c,'context':_0x17015d}]};}catch(_0x84cbeb){return{'method':_0x490e67(0x116),'version':_0x4a0483,'args':[{'ts':_0x275938,'session':_0x334fd3,'args':[{'type':_0x490e67(0x16e),'error':_0x84cbeb&&_0x84cbeb[_0x490e67(0x188)]}],'id':_0x4a459c,'context':_0x17015d}]};}finally{try{if(_0x97a821&&_0x4538cb){let _0x432ee2=_0x223738();_0x97a821['count']++,_0x97a821['time']+=_0x42fb36(_0x4538cb,_0x432ee2),_0x97a821['ts']=_0x432ee2,_0x1f3bee[_0x490e67(0x1cd)][_0x490e67(0x180)]++,_0x1f3bee[_0x490e67(0x1cd)][_0x490e67(0x15e)]+=_0x42fb36(_0x4538cb,_0x432ee2),_0x1f3bee[_0x490e67(0x1cd)]['ts']=_0x432ee2,(_0x97a821[_0x490e67(0x180)]>_0x141946[_0x490e67(0x1cb)][_0x490e67(0x12d)]||_0x97a821['time']>_0x141946[_0x490e67(0x1cb)][_0x490e67(0x1bc)])&&(_0x97a821[_0x490e67(0x171)]=!0x0),(_0x1f3bee['hits']['count']>_0x141946[_0x490e67(0x13f)][_0x490e67(0x12d)]||_0x1f3bee[_0x490e67(0x1cd)][_0x490e67(0x15e)]>_0x141946[_0x490e67(0x13f)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x1f3bee[_0x490e67(0x1cd)]['reduceLimits']=!0x0);}}catch{}}}return _0x1e6d74;}function _0x2214(){var _0x14499a=['value','undefined','rootExpression','path','_treeNodePropertiesBeforeFullValue','origin','data','resolveGetters','_addProperty','expo','_blacklistedProperty','_getOwnPropertyDescriptor','timeStamp','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','elements','null','allStrLength','_regExpToString','react-native','Map','2eFQllr','ninjaSuppressConsole',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','coverage','_isArray','_connected','hrtime','toString','_setNodePermissions','bound\\x20Promise','reducePolicy','_reconnectTimeout','...','nan','resetWhenQuietMs','Number','_ninjaIgnoreNextError','_hasSymbolPropertyOnItsPath','current','Set','import(\\x27url\\x27)','bigint','sort','_cleanNode','_connectToHostNow','bind','catch','_hasSetOnItsPath','\\x20server','get','NEGATIVE_INFINITY','1.0.0','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_addLoadNode','_consoleNinjaAllowedToStart','array','length','props','_p_name','push','performance','location','POSITIVE_INFINITY','date','autoExpand','10162370kgItlO','map','disabledTrace','10.0.2.2','_numberRegExp','env','symbol','resolve','root_exp','onmessage','test','strLength','port','concat','_WebSocket','then','level','log','_addObjectProperty','object','_isSet','getOwnPropertyDescriptor','Error','isExpressionToEvaluate','edge','charAt','match','parent','indexOf','valueOf','stack','warn','_connecting','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_setNodeId','node','next.js','versions','1668317DHAXqx','_property','reduceOnCount','_getOwnPropertySymbols','_undefined','positiveInfinity','_propertyName','_dateToString','_sendErrorMessage','gateway.docker.internal','remix','_treeNodePropertiesAfterFullValue','984054cwWOKG','reducedLimits','_capIfString','_keyStrRegExp','cappedProps','_attemptToReconnectShortly','_socket','reload','global','endsWith','args','RegExp','_extendedWarning','onerror','funcName','_isPrimitiveWrapperType','_disposeWebsocket','webpack','[object\\x20BigInt]','index','_maxConnectAttemptCount','[object\\x20Array]',\"/Users/abdipurnawan/.cursor/extensions/wallabyjs.console-ninja-1.0.493-universal/node_modules\",'getOwnPropertyNames','constructor','dockerizedApp','type','142700orZAYJ','includes','replace','49913','hasOwnProperty','boolean','serialize','_quotedRegExp','_setNodeExpressionPath','unref','join','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','time','depth','modules','_HTMLAllCollection','slice','method','nodeModules','_console_ninja','parse','415197WHEhXo','elapsed','process','eventReceivedCallback','getOwnPropertySymbols','_setNodeExpandableState','[object\\x20Map]','unknown','stackTraceLimit','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','substr','isArray','_allowedToSend','stringify','console','disabledLog','_Symbol','_webSocketErrorDocsLink','_getOwnPropertyNames','getter','trace','send','_p_','[object\\x20Set]','count','','_allowedToConnectOnSend','hostname','negativeInfinity','set','autoExpandPropertyCount','_isNegativeZero','message','autoExpandMaxDepth','prototype','iterator','_addFunctionsNode','https://tinyurl.com/37x8b79t','angular','127.0.0.1','import(\\x27path\\x27)','totalStrLength','host','NEXT_RUNTIME','_ws','call','function','5lYlfxC','56GExRSR','Boolean','1563852BMXApG',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'_setNodeLabel','_isPrimitiveType','_isUndefined','Symbol','_processTreeNodeResult','_WebSocketClass','ExpoDevice','_isMap','default','_console_ninja_session','now','autoExpandLimit','android','string','11djOgAe','HTMLAllCollection','unshift','_type','capped','_sortProps','resetOnProcessingTimeAverageMs','_inBrowser','number','url','autoExpandPreviousObjects','WebSocket','toUpperCase','_hasMapOnItsPath','[object\\x20Date]','cappedElements','forEach','error','reduceOnAccumulatedProcessingTimeMs','toLowerCase','_connectAttemptCount','noFunctions','207488XhRovp','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','split','name','logger\\x20websocket\\x20error','getWebSocketClass',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Abdis-MacBook-Pro.local\",\"192.168.8.100\",\"10.8.0.16\"],'_objectToString','String','_additionalMetadata','readyState','perLogpoint','defaultLimits','hits','expressionsToEvaluate','negativeZero'];_0x2214=function(){return _0x14499a;};return _0x2214();}function G(_0x3130d3){var _0x84a520=_0x54cc26;if(_0x3130d3&&typeof _0x3130d3==_0x84a520(0x118)&&_0x3130d3[_0x84a520(0x14f)])switch(_0x3130d3[_0x84a520(0x14f)][_0x84a520(0x1c3)]){case'Promise':return _0x3130d3[_0x84a520(0x156)](Symbol[_0x84a520(0x18b)])?Promise['resolve']():_0x3130d3;case _0x84a520(0xe1):return Promise[_0x84a520(0x10c)]();}return _0x3130d3;}function _0x4a90(_0xbf85a4,_0x245df9){var _0x2214cf=_0x2214();return _0x4a90=function(_0x4a90b3,_0x346472){_0x4a90b3=_0x4a90b3-0xc3;var _0x3eefbb=_0x2214cf[_0x4a90b3];return _0x3eefbb;},_0x4a90(_0xbf85a4,_0x245df9);}((_0x3cca3d,_0xf824c0,_0x3e0a9b,_0x5c058d,_0x38abea,_0x269295,_0x304d0c,_0x56b187,_0x5799d3,_0x19f830,_0x5a3a2e,_0x231e3c)=>{var _0x4818fc=_0x54cc26;if(_0x3cca3d[_0x4818fc(0x165)])return _0x3cca3d[_0x4818fc(0x165)];let _0x52e3da={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x3cca3d,_0x56b187,_0x38abea))return _0x3cca3d[_0x4818fc(0x165)]=_0x52e3da,_0x3cca3d['_console_ninja'];let _0x44b593=b(_0x3cca3d),_0x48380c=_0x44b593[_0x4818fc(0x168)],_0x1338d8=_0x44b593[_0x4818fc(0xd0)],_0x29d139=_0x44b593[_0x4818fc(0x1a6)],_0x1ed58e={'hits':{},'ts':{}},_0x19f55c=J(_0x3cca3d,_0x5799d3,_0x1ed58e,_0x269295,_0x231e3c,_0x38abea===_0x4818fc(0x129)?G:void 0x0),_0x59946f=(_0x57c8c4,_0x2ff1c0,_0x1589b0,_0x5826e5,_0xd0311c,_0x2786a0)=>{var _0x40d17e=_0x4818fc;let _0x218bcb=_0x3cca3d['_console_ninja'];try{return _0x3cca3d['_console_ninja']=_0x52e3da,_0x19f55c(_0x57c8c4,_0x2ff1c0,_0x1589b0,_0x5826e5,_0xd0311c,_0x2786a0);}finally{_0x3cca3d[_0x40d17e(0x165)]=_0x218bcb;}},_0x22921d=_0x423627=>{_0x1ed58e['ts'][_0x423627]=_0x1338d8();},_0x45102e=(_0x88203,_0x370b7a)=>{var _0x9ec8e9=_0x4818fc;let _0x3d041a=_0x1ed58e['ts'][_0x370b7a];if(delete _0x1ed58e['ts'][_0x370b7a],_0x3d041a){let _0x52a6eb=_0x48380c(_0x3d041a,_0x1338d8());_0x312a62(_0x59946f(_0x9ec8e9(0x15e),_0x88203,_0x29d139(),_0x9b859d,[_0x52a6eb],_0x370b7a));}},_0x2ee867=_0x41fceb=>{var _0x5bbca8=_0x4818fc,_0x5ba44d;return _0x38abea==='next.js'&&_0x3cca3d[_0x5bbca8(0xc9)]&&((_0x5ba44d=_0x41fceb==null?void 0x0:_0x41fceb[_0x5bbca8(0x141)])==null?void 0x0:_0x5ba44d[_0x5bbca8(0xfc)])&&(_0x41fceb['args'][0x0][_0x5bbca8(0xc9)]=_0x3cca3d[_0x5bbca8(0xc9)]),_0x41fceb;};_0x3cca3d[_0x4818fc(0x165)]={'consoleLog':(_0x1d0443,_0x2f73e4)=>{var _0x97f6bc=_0x4818fc;_0x3cca3d[_0x97f6bc(0x176)][_0x97f6bc(0x116)][_0x97f6bc(0x1c3)]!==_0x97f6bc(0x177)&&_0x312a62(_0x59946f(_0x97f6bc(0x116),_0x1d0443,_0x29d139(),_0x9b859d,_0x2f73e4));},'consoleTrace':(_0x4f29ba,_0x40e0fb)=>{var _0x5ea07f=_0x4818fc,_0xb083e5,_0x274db5;_0x3cca3d[_0x5ea07f(0x176)][_0x5ea07f(0x116)][_0x5ea07f(0x1c3)]!==_0x5ea07f(0x107)&&((_0x274db5=(_0xb083e5=_0x3cca3d['process'])==null?void 0x0:_0xb083e5[_0x5ea07f(0x12a)])!=null&&_0x274db5[_0x5ea07f(0x128)]&&(_0x3cca3d[_0x5ea07f(0xe8)]=!0x0),_0x312a62(_0x2ee867(_0x59946f(_0x5ea07f(0x17c),_0x4f29ba,_0x29d139(),_0x9b859d,_0x40e0fb))));},'consoleError':(_0x2bc0da,_0x1c2aec)=>{var _0x1781f6=_0x4818fc;_0x3cca3d[_0x1781f6(0xe8)]=!0x0,_0x312a62(_0x2ee867(_0x59946f(_0x1781f6(0x1bb),_0x2bc0da,_0x29d139(),_0x9b859d,_0x1c2aec)));},'consoleTime':_0x39580d=>{_0x22921d(_0x39580d);},'consoleTimeEnd':(_0x3bc815,_0x207b89)=>{_0x45102e(_0x207b89,_0x3bc815);},'autoLog':(_0x1feae7,_0x412215)=>{var _0x28d3ed=_0x4818fc;_0x312a62(_0x59946f(_0x28d3ed(0x116),_0x412215,_0x29d139(),_0x9b859d,[_0x1feae7]));},'autoLogMany':(_0x2ec4aa,_0x3ebbc7)=>{_0x312a62(_0x59946f('log',_0x2ec4aa,_0x29d139(),_0x9b859d,_0x3ebbc7));},'autoTrace':(_0x1181a3,_0x59d6b5)=>{_0x312a62(_0x2ee867(_0x59946f('trace',_0x59d6b5,_0x29d139(),_0x9b859d,[_0x1181a3])));},'autoTraceMany':(_0x5d59ec,_0x321085)=>{var _0x254ed6=_0x4818fc;_0x312a62(_0x2ee867(_0x59946f(_0x254ed6(0x17c),_0x5d59ec,_0x29d139(),_0x9b859d,_0x321085)));},'autoTime':(_0x221590,_0x1740ad,_0x144e01)=>{_0x22921d(_0x144e01);},'autoTimeEnd':(_0x37d7ca,_0x1b7b6f,_0x52089f)=>{_0x45102e(_0x1b7b6f,_0x52089f);},'coverage':_0x2fe387=>{var _0xeb334b=_0x4818fc;_0x312a62({'method':_0xeb334b(0xdb),'version':_0x269295,'args':[{'id':_0x2fe387}]});}};let _0x312a62=H(_0x3cca3d,_0xf824c0,_0x3e0a9b,_0x5c058d,_0x38abea,_0x19f830,_0x5a3a2e),_0x9b859d=_0x3cca3d[_0x4818fc(0x1a5)];return _0x3cca3d[_0x4818fc(0x165)];})(globalThis,_0x54cc26(0x18f),_0x54cc26(0x155),_0x54cc26(0x14d),_0x54cc26(0x148),_0x54cc26(0xf7),'1763885282425',_0x54cc26(0x1c6),_0x54cc26(0x181),'','1',_0x54cc26(0x19b));");
  } catch (e) {
    console.error(e);
  }
}
; /* istanbul ignore next */
function oo_oo(/**@type{any}**/i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(/**@type{any}**/i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tx(/**@type{any}**/i) {
  for (var _len3 = arguments.length, v = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    v[_key3 - 1] = arguments[_key3];
  }
  try {
    oo_cm().consoleError(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(/**@type{any}**/v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(/**@type{any}**/v, /**@type{any}**/i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/SelectDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/SelectDropdown']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SelectDropdown'];

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

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

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

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderSecondary']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/Search":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Search']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Search'];

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
>>>>>>> a617ed168c3c58bc1b18fed29f94d4085cc103ec
//# sourceMappingURL=forum.js.map