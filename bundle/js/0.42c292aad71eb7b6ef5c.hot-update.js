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
    _c(
      "table",
      { staticClass: "table table-hover table-striped table-bordered" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.students, function(student) {
            return _c("tr", [
              _c("td", [
                _vm._v("\n\t\t\t\t\t" + _vm._s(student.name) + "\n\t\t\t\t")
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "\n\t\t\t\t\t" + _vm._s(student.reg_number) + "\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v("\n\t\t\t\t\t" + _vm._s(student.address) + "\n\t\t\t\t")
              ]),
              _vm._v(" "),
              _vm._m(1, true)
            ])
          })
        )
      ]
    )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-info" }, [_vm._v("View More")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Delete")])
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