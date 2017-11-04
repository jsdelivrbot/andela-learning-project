
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('departments').del()
    .then(function () {
      // Inserts seed entries
      return knex('departments').insert([
        {id: 1, department_name : 'Computer Science'},
        {id: 2, department_name : 'Others'}
      ]);
    });
};
