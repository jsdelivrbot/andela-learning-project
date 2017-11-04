webpackHotUpdate(0,{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(8);
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
		this.fetchStudents();
	},
	methods: {
		delete_student: function (id) {
			let _this = this;
			swal({
				title: "Deleting Student",
				icon: "warning",
				text: "sure to delete?",
				buttons: [true, "Yes, Delete"]
			}).then(function (e) {
				if (e) {
					__WEBPACK_IMPORTED_MODULE_0_axios___default()({
						url: '/api/v1/student/delete/' + id,
						method: 'delete'
					}).then(function (e) {
						if (e.data.status == 'success') {
							swal('Success', 'Student has been Deleted', 'success');
							_this.fetchStudents();
						} else {
							swal("Error", 'An Error Occorred', 'error');
						}
					});
				}
			});
		},
		fetchStudents: function () {
			__WEBPACK_IMPORTED_MODULE_0_axios___default()({
				method: 'get',
				url: '/api/v1/student/all'
			}).then(function (response) {
				this.students = response.data;
			}.bind(this));
		}
	}
});

/***/ }),

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
                    _c("button", { staticClass: "btn btn-info" }, [
                      _vm._v("Edit")
                    ]),
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