
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          id: 1, 
          reg_number: 'MOUAU/12/21261', 
          name: 'Friday G', 
          address: '114 U street', 
          department: 1, 
          image: 'http://www.abc.net.au/news/image/8314104-1x1-940x940.jpg'
        },
      ]);
    });
};
