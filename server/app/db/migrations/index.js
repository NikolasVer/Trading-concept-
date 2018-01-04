exports.up = (knex, Promise) => {
    return knex.schema.createTable('currency', (table) => {
      table.increments();
      table.string('base').notNullable();
      table.string('fullName').notNullable();
      table.string('price').notNullable();
      table.integer('time').notNullable();
    })
  };

  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('currency')
  };