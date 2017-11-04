webpackHotUpdate(0,{

/***/ 64:
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
			current_student: this.$route.params.id,
			departments: null,
			first_name: null,
			last_name: null,
			entry: {
				name: this.full_name,
				address: null,
				department: null,
				reg_number: null
			}
		};
	},
	mounted: function () {
		__WEBPACK_IMPORTED_MODULE_0_axios___default()({
			url: '/api/v1/department/all',
			method: 'get'
		}).then(function (response) {
			this.departments = response.data.data;
		}.bind(this));

		__WEBPACK_IMPORTED_MODULE_0_axios___default()({
			url: `/api/v1/student/${this.current_student}`,
			method: 'get'
		}).then(function (response) {

			if (response.data.data.length > 0) {

				let current = response.data.data[0];
				let names = current.name.split(" ");
				console.warn(names);
				this.first_name = names[0];
				this.last_name = names[1];
				this.entry.name = current.name;
				this.entry.address = current.address;
				this.entry.department = current.department;
				this.entry.reg_number = current.reg_number;
			}
		}.bind(this));
	},
	watch: {
		first_name: function (val) {
			this.entry.name = val + ' ' + this.last_name;
		},
		last_name: function (val) {
			this.entry.name = this.first_name + ' ' + val;
		}
	},
	methods: {
		submit: function () {
			__WEBPACK_IMPORTED_MODULE_0_axios___default()({
				url: '/api/v1/student/edit/' + this.current_student,
				method: 'put',
				data: this.entry
			}).then(function (e) {
				if (e.data.status == 'success') {
					swal('Success', 'Record has been Edited', 'success');
				} else {
					let errors = "";

					for (var i = 0; i < e.data.errors.length; i++) {
						errors += e.data.errors[i].msg + "\n";
					}
					console.warn(e.data);
					swal('Error', +errors, 'error');
				}
			});
		}
	}
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "padding-v" }, [
    _c(
      "div",
      { staticClass: "col-md-6 col-md-offset-3 padding-v" },
      [
        _c(
          "router-link",
          { staticClass: "btn btn-info", attrs: { to: "/student/all" } },
          [_vm._v("All Students")]
        ),
        _c("br"),
        _vm._v(" \n\t\t"),
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
                  attrs: {
                    type: "text",
                    placeholder: "Reg. Number",
                    disabled: "true"
                  },
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
                  [_vm._v(" Edit Student ")]
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
      _c("h4", [_vm._v("Edit Student")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(1)      .rerender("data-v-17bbf568", esExports)
  }
}

/***/ })

})