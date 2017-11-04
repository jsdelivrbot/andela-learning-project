webpackHotUpdate(0,{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "col-md-6 col-md-offset-3" }, [
      _c("div", { staticClass: "panel panel-default" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-body" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "select",
                { staticClass: "form-control" },
                _vm._l(_vm.departments, function(department) {
                  return _c("option", { domProps: { value: department.id } }, [
                    _vm._v(_vm._s(department.name))
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h4", [_vm._v("Create Student")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Enter First Name" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Enter Last Name" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Reg. Number" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("textarea", {
          staticClass: "form-control one-whole",
          attrs: { type: "text", placeholder: "Enter Address" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info one-whole no-outline",
            attrs: { type: "text" }
          },
          [_vm._v(" Add Student ")]
        )
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
    __webpack_require__(0)      .rerender("data-v-bef42c84", esExports)
  }
}

/***/ })

})