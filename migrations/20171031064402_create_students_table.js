
exports.up = function(knex, Promise) {
 	return Promise.all([
 		knex.schema.createTable('students', function(table){
 			table.increments('id').unsigned().primary();
 			table.string('reg_number').unique();
 			table.string('name');
 			table.string('address');
 			table.string('image');
 			table.integer('department');
 		})
 	]);
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('students');
};
