webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container padding-v" }, [
    _c(
      "span",
      { staticClass: "pull-right" },
      [
        _c(
          "router-link",
          { staticClass: "btn btn-info", attrs: { to: "/student/create" } },
          [_vm._v("Create Student")]
        )
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
                    _vm._m(1, true),
                    _vm._v(" "),
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
                      [
                        _c("span", { staticClass: "fa fa-eye" }),
                        _vm._v(" View More")
                      ]
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
                      [
                        _c("span", { staticClass: "fa fa-trash-o" }),
                        _vm._v(" Delete")
                      ]
                    )
                  ])
                ])
              })
            )
          ]
        )
      : _c("div", [
          _c(
            "h3",
            { staticClass: "text-muted", attrs: { align: "center" } },
            [
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n\t\t\tYou Currently have no Students at the moment, click \n\t\t\t"
              ),
              _c("router-link", { attrs: { to: "/student/create" } }, [
                _vm._v("here")
              ]),
              _vm._v("\n\t\t\tto add Students\n\t\t")
            ],
            1
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-success" }, [
      _c("span", { staticClass: "fa fa-cog" }),
      _vm._v(" Edit")
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