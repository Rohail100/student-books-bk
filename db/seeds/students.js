exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {fname: 'Hettie', lname: 'Marshall'},
        {fname: 'Hester', lname: 'Owens'},
        {fname: 'Henry', lname: 'Jackson'}
      ]);
    });
};