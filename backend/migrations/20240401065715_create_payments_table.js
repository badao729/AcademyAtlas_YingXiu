exports.up = function(knex) {
    return knex.schema.createTable('payments', table => {
      table.increments('payment_id').primary();
      table.string('payer_name');
      table.decimal('amount', 10, 2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('payments');
  };
  