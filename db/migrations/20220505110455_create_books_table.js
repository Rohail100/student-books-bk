exports.up = function(knex) {
  return knex.schema
    .createTable('books', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.string('author');
      table.integer('borrowed_by').unsigned()
      table.foreign('borrowed_by').references('students.id');
      table.date("borrow_date");
      table.date("return_date")
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('students');
};