webpackHotUpdate(0,{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "col-md-6 col-md-offset-3" },
      [
        _c("router-link", { attrs: { to: "/student/all" } }, [
          _vm._v("All Students")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panel panel-default" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.first_name,
                      expression: "first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter First Name" },
                  domProps: { value: _vm.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.first_name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.last_name,
                      expression: "last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter Last Name" },
                  domProps: { value: _vm.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.last_name = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entry.reg_number,
                      expression: "entry.reg_number"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Reg. Number" },
                  domProps: { value: _vm.entry.reg_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entry, "reg_number", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.entry.department,
                        expression: "entry.department"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.entry,
                          "department",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.departments, function(department) {
                    return _c(
                      "option",
                      { domProps: { value: department.id } },
                      [_vm._v(_vm._s(department.department_name))]
                    )
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entry.address,
                      expression: "entry.address"
                    }
                  ],
                  staticClass: "form-control one-whole",
                  attrs: { type: "text", placeholder: "Enter Address" },
                  domProps: { value: _vm.entry.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entry, "address", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info one-whole no-outline",
                    attrs: { type: "text" },
                    on: { click: _vm.submit }
                  },
                  [_vm._v(" Add Student ")]
                )
              ])
            ])
          ])
        ])
      ],
      1
    )
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
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(1)      .rerender("data-v-bef42c84", esExports)
  }
}

/***/ })

})