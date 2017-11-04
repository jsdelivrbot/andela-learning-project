var knex 	= require('../../config/knex');

module.exports = {
	list_all : (callBack=function(){})=>
	{
		knex('students').then(function(data)
		{
			callBack(data);
		});
	},

	create : (student_object, cbk = function(){}) =>
	{
		var add = knex.insert(student_object).into('students');

		add.then(e=>{
			cbk("success");
		}).catch(err =>{
			cbk("error");
			console.log(err)
		});
	},
	edit : (student_object, cbk = function(){}) =>
	{
		var edit = knex('students').where('reg_number',student_object.reg_number).update(student_object);

		edit.then(e=>{
			cbk("success");
		}).catch(err =>{
			cbk("error");
			console.log(err)
		});
	},

	find : (student_id, callBack=function(){}) =>
	{
		return knex('students').where('id',student_id).then(e=>{
			callBack(e);
		});
	},

	delete : (student_id, callBack = function(){}) =>
	{
		var del = knex('students').where('id', student_id).del();
		// callBack(del);
		// console.log(del)
		del.then(e=>{
			if(e)
			{
				callBack(true);
			}
			else
			{
				callBack(false);
			}
		}).catch(e=>{
			console.log(e)
			callBack(false);
		})
	}
}