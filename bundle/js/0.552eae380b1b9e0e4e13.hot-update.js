webpackHotUpdate(0,{

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h4", [_vm._v("Showing All Students")]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover table-bordered" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _c("navbar"),
          _vm._v(" "),
          _vm._l(_vm.students, function(student) {
            return _c("tr", [
              _c("td", [
                _vm._v("\n\t\t\t\t\t" + _vm._s(student.name) + "\n\t\t\t\t")
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
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

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function () {
		return {
			students: null
		};
	},
	mounted: function () {
		__WEBPACK_IMPORTED_MODULE_0_axios___default()({
			method: 'get',
			url: '/api/v1/student/all'
		}).then(function (response) {
			this.students = response.data;
		}.bind(this));
	}
});

/***/ })

})