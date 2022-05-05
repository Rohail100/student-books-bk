exports.up = function(knex) {
    return knex.schema
      .createTable('students', function (table) {
        table.increments('id');
        table.string('fname').notNullable();
        table.string('lname').notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('students');
  };