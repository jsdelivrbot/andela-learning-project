webpackHotUpdate(0,{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_default_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_student_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_router__ = __webpack_require__(29);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_router__["a" /* default */]);

const routes = [{ path: '/home', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_vue__["a" /* default */] }, { path: '/student/create', component: __WEBPACK_IMPORTED_MODULE_3__components_create_student_vue__["a" /* default */] }];

const router = new __WEBPACK_IMPORTED_MODULE_4_vue_router__["a" /* default */]({
	routes: routes
});

const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	router

}).$mount('#app');

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/js/components/create_student.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}


/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

})