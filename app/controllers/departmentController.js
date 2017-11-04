var departmentModel 	= require('../models/departmentModel');
module.exports = {
	list : (req,res) =>
	{
		departmentModel.list_all(function(data){
			res.json({
				"status" : "success",
				"data" 	 : data
			});
		});
	},
}