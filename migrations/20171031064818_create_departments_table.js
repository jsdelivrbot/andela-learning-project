
exports.up = function(knex, Promise) {
 	return Promise.all([
 		knex.schema.createTable('departments', function(table){
 			table.increments('id').unsigned().primary();
 			table.string('department_name');
 			table.string('department_details');
 		})
 	]);
};

exports.down = function(knex, Promise) {
 	return knex.schema.dropTable('departments');
};
