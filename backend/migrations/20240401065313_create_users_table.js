exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('name').notNullable();
      table.string('role').notNullable();
      table.string('password').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  