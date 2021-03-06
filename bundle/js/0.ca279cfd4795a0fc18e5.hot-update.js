webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "span",
      { staticClass: "pull-right" },
      [
        _vm.students.length > 0
          ? _c(
              "router-link",
              { staticClass: "btn btn-info", attrs: { to: "/student/create" } },
              [_vm._v("Create Student")]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _vm.students.length > 0
      ? _c("h4", [_vm._v(" Showing All Students")])
      : _vm._e(),
    _vm._v(" "),
    _vm.students.length > 0
      ? _c(
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
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(student.address) + "\n\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        on: {
                          click: function($event) {
                            _vm.fetchStudents()
                          }
                        }
                      },
                      [_vm._v("View More")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            _vm.delete_student(student.id)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ])
                ])
              })
            )
          ]
        )
      : _vm._e()
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
    __webpack_require__(1)      .rerender("data-v-9a4a597a", esExports)
  }
}

/***/ })

})