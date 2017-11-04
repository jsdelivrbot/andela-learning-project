module.exports = function(){
	"use strict";
	const express 			= require('express');
	const router 			= express.Router();
	const studentController = require('../app/controllers/studentController');
	const deptController 	= require('../app/controllers/departmentController');


	router.get('/student/all', studentController.list);
	router.post('/student/create', studentController.add_student);
	router.get('/department/all', deptController.list );
	router.delete('/student/delete/:id', function(req,res){
		studentController.delete_student(req,res);
	});
	router.put('/student/edit/:id', function(req,res){
		studentController.edit_student(req,res);
	});
	router.get('/student/:id',function(req,res){
		studentController.get_single_student(req,res);
	});
	return router;
}