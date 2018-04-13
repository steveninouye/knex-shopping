exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.increments();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('products', table => {
      table.increments();
      table.string('title').notNullable();
      table.text('description');
      table.integer('inventory').notNullable();
      table.decimal('price', 8, 2).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('cart', table => {
      table.increments();
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table
        .integer('products_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('cart')
    .dropTable('products')
    .dropTable('users');
};
