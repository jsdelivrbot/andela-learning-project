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
			console.log(response.data);
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
				url: '/api/v1/student/create',
				method: 'post',
				data: this.entry
			}).then(function (e) {
				if (e.data.status == 'success') {
					swal('Success', 'Record has been added', 'success');

					//Clear all textareas
					document.querySelector('textarea').value = '';

					document.querySelectorAll('input').forEach(e => {
						e.value = '';
					});
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

/***/ })

})