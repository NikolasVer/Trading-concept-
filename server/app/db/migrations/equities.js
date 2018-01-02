exports.up = (knex, Promise) => {
  return knex.schema.createTable('equities', (table) => {
    table.increments();
    table.string('tsexchange').notNullable();
    table.string('producttype').notNullable();
    table.string('issueclass').notNullable();
    table.integer('listings').notNullable();
    table.string('region').notNullable();
    table.string('country').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('equities');
};