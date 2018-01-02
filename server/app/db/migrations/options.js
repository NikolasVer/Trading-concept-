exports.up = (knex, Promise) => {
    return knex.schema.createTable('options', (table) => {
      table.increments();
      table.string('tsexchange').notNullable();
      table.string('producttype').notNullable();
      table.string('underlyingtype').notNullable();
      table.string('strategytypes').notNullable();
      table.integer('series').notNullable();
      table.integer('contracts').notNullable();
      table.string('region').notNullable();
      table.string('country').notNullable();
    });
  };

  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('options');
  };