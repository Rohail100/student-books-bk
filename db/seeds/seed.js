exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      return knex('books').del()

        .then(function () {
          // Inserts seed entries
          return knex('students').insert([
            { fname: 'Hettie', lname: 'Marshall' },
            { fname: 'Hester', lname: 'Owens' },
            { fname: 'Henry', lname: 'Jackson' },
            { fname: 'Charlie', lname: 'Bax' },
            { fname: 'Hadden', lname: 'Rowe' }
          ])

            .then(function () {
              // Inserts seed entries
              return knex('books').insert([
                { name: 'Celestial Bodies', author: 'Jokha Alharthi', borrowed_by: 4, borrow_date: '2022-05-02', return_date: '2022-05-13' },
                { name: 'Cheque book', author: 'Vasdev Mohi', borrowed_by: 5, borrow_date: '2022-05-01', return_date: '2022-05-11' },
                { name: 'The Overstory', author: 'Richard Powers', borrowed_by: 3, borrow_date: '2022-05-04', return_date: '2022-05-23' },
                { name: 'My Journey', author: 'Abdul Kalam', borrowed_by: null, borrow_date: null, return_date: null },
                { name: 'The Little Book of Encouragement', author: 'Dalai Lama', borrowed_by: 1, borrow_date: '2022-05-05', return_date: '2022-05-15' },
                { name: 'My Experiments with Silence', author: 'Samir Soni', borrowed_by: 2, borrow_date: '2022-05-01', return_date: '2022-05-09' },
                { name: 'The Bench', author: 'Meghan Markle', borrowed_by: 2, borrow_date: '2022-07-01', return_date: '2022-05-26' }
              ]);
            })
        });
    });
};