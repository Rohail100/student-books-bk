exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {name: 'Celestial Bodies', author: 'Jokha Alharthi', borrowed_by: 3, borrow_date: '2022-05-05', return_date: '2022-05-05'},
        {name: 'Cheque book', author: 'Vasdev Mohi', borrowed_by: 2, borrow_date: '2022-05-05', return_date: '2022-05-05'},
        {name: 'The Overstory', author: 'Richard Powers', borrowed_by: 3, borrow_date: '2022-05-05', return_date: '2022-05-05'},
        {name: 'The Little Book of Encouragement', author: 'Dalai Lama', borrowed_by: 1, borrow_date: '2022-05-05', return_date: '2022-05-05'},
        {name: 'My Experiments with Silence', author: 'Samir Soni', borrowed_by: 2, borrow_date: '2022-05-05', return_date: '2022-05-05'},
      ]);
    });
};