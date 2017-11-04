var studentModel 	= require('../models/studentModel');
module.exports = {
	list : (req,res) =>
	{
		studentModel.list_all(function(data){
			res.json(data);
		});
	},

	list_by_department : (req,res) =>{

		
	},

	add_student : (req,res) =>{

		
		
		req.checkBody('name', 'name is required').notEmpty();
		req.checkBody('address', 'Address is required').notEmpty();
		req.checkBody('department', 'Department is required').isInt();


		const temp 			= req.body;

		const name 			= temp.name;
		const department 	= temp.department;
		const address 		= temp.address;
		const reg_number 	= typeof(temp.reg_number)=="undefined" ? '' : temp.reg_number;
		const image 		= typeof(temp.image)=="undefined" ? '' : temp.image;

		var errors 			= req.validationErrors();

		req.checkBody('reg_number','this reg_number is already in use').custom(value => 
		{
      		return studentModel.find(value).then(user => {
      			errors.push('this reg_number is already in use');
        		throw new Error('this reg_number is already in use');
     	 	});
    	});

		console.log(errors)

		const student_object = {
			name 		: name,
			department 	: department,
			address 	: address,
			reg_number 	: reg_number,
			image 		: image,
		}

		

		if(!errors)
		{
			studentModel.create(student_object,function(t){
				res.json({
				status : "success",
				message: "Student has been created",
				data 	: t
				})

			});
		}
		else
		{
			res.json({
				status : "error",
				message: "Student could not be created",
				errors : errors
			});
		}

		
	},
	delete_student : (req,res) => {
		studentModel.delete(req.params.id,function(del){
			if(del)
			{
				res.json({
					status : "success",
					message: "Student has been deleted",
				});
			}
			else
			{
				res.json({
					status : "error",
					message: "Student could not be deleted"
				});
			}
		});
		
	},
	get_single_student : (req, res) =>
	{
		studentModel.find(req.params.id,function(data){
			res.json({
					status : "success",
					data   : data
				});
		});
	},
	edit_student : (req,res) =>
	{
		req.checkBody('name', 'name is required').notEmpty();
		req.checkBody('address', 'Address is required').notEmpty();
		req.checkBody('department', 'Department is required').isInt();


		const temp 			= req.body;

		const name 			= temp.name;
		const department 	= temp.department;
		const address 		= temp.address;
		const reg_number 	= typeof(temp.reg_number)=="undefined" ? '' : temp.reg_number;
		const image 		= typeof(temp.image)=="undefined" ? '' : temp.image;

		var errors 			= req.validationErrors();

		const student_object = {
			name 		: name,
			department 	: department,
			address 	: address,
			reg_number 	: reg_number,
			image 		: image,
		}

		if(!errors)
		{
			studentModel.edit(student_object,function(t){
				res.json({
				status : "success",
				message: "Student has been edited",
				data 	: t
				})

			});
		}
		else
		{
			res.json({
				status : "error",
				message: "Student could not be edited",
				errors : errors
			});
		}
	}
}