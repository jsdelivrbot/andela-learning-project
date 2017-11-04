var knex 	= require('../../config/knex');

module.exports = {
	list_all : (callBack=function(){})=>
	{
		knex('departments').then(function(data)
		{
			callBack(data);
		});
	},

	create : (department_object, cbk = function(){}) =>
	{
		var add = knex.insert(department_object).into('departments');

		add.then(e=>{
			cbk("success");
		}).catch(err =>{
			cbk("error");
			console.log(err)
		});
	},

	find : (department_id) =>
	{
		return knex('departments').where('id'==department_id);
	}
}