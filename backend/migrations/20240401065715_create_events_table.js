exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
      table.increments('event_id').primary();
      table.string('event_name').references('name').inTable('users');
      table.bigInteger('start_time').notNullable();
      table.bigInteger('end_time').notNullable();
      table.decimal('price_per_hour', 10, 2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('events');
  };
  