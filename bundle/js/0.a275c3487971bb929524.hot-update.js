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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_students_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_router__ = __webpack_require__(29);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);

const routes = [{ path: '/home', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_1__components_default_vue__["a" /* default */] }, { path: '/login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_vue__["a" /* default */] }, { path: '/student/create', component: __WEBPACK_IMPORTED_MODULE_3__components_create_student_vue__["a" /* default */] }, { path: '/student/all', component: __WEBPACK_IMPORTED_MODULE_4__components_list_students_vue__["a" /* default */] }];

const router = new __WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]({
	routes: routes
});

const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	router

}).$mount('#app');

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a4a597a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_list_students_vue__ = __webpack_require__(62);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */

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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a4a597a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_list_students_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/js/components/list_students.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(0)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a4a597a", Component.options)
  } else {
    hotAPI.reload("data-v-9a4a597a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("table", { staticClass: "table table-hover table-bordered" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("\n\t\t\t\t\tName\n\t\t\t\t")]),
            _vm._v(" "),
            _c("th", [_vm._v("\n\t\t\t\t\tReg. Number\n\t\t\t\t")]),
            _vm._v(" "),
            _c("th", [_vm._v("\n\t\t\t\t\tAddress\n\t\t\t\t")]),
            _vm._v(" "),
            _c("th", [_vm._v("\n\t\t\t\t\tActions\n\t\t\t\t")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(0)      .rerender("data-v-9a4a597a", esExports)
  }
}

/***/ })

})