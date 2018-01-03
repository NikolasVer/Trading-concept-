exports.up = (knex, Promise) => {
    return knex.schema.createTable('btc', (table) => {
      table.increments();
      table.string('base').notNullable();
      table.string('fullName').notNullable();
      table.string('price').notNullable();
      table.integer('time').notNullable();
    })
      .then(() => {
          return knex.schema.createTable('eth', (table) => {
              table.increments();
              table.string('base').notNullable();
              table.string('fullName').notNullable();
              table.string('price').notNullable();
              table.integer('time').notNullable();
            })
      })

      .then(() => {
        return knex.schema.createTable('xmr', (table) => {
            table.increments();
            table.string('base').notNullable();
            table.string('fullName').notNullable();
            table.string('price').notNullable();
            table.integer('time').notNullable();
          })
        })

        .then(() => {
          return knex.schema.createTable('bch', (table) => {
              table.increments();
              table.string('base').notNullable();
              table.string('fullName').notNullable();
              table.string('price').notNullable();
              table.integer('time').notNullable();
            })
        })

        .then(() => {
          return knex.schema.createTable('xrp', (table) => {
              table.increments();
              table.string('base').notNullable();
              table.string('fullName').notNullable();
              table.string('price').notNullable();
              table.integer('time').notNullable();
            })
        })

        .then(() => {
          return knex.schema.createTable('ltc', (table) => {
              table.increments();
              table.string('base').notNullable();
              table.string('fullName').notNullable();
              table.string('price').notNullable();
              table.integer('time').notNullable();
            })
        })

        .then(() => {
          return knex.schema.createTable('xem', (table) => {
              table.increments();
              table.string('base').notNullable();
              table.string('fullName').notNullable();
              table.string('price').notNullable();
              table.integer('time').notNullable();
            })
        })
  };

  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('btc')
        .then(() => {
          return knex.schema.dropTable('eth')
        })
        .then(() => {
          return knex.schema.dropTable('xmr')
        })
        .then(() => {
          return knex.schema.dropTable('bch')
        })
        .then(() => {
          return knex.schema.dropTable('xrp')
        })
        .then(() => {
          return knex.schema.dropTable('ltc')
        })
        .then(() => {
          return knex.schema.dropTable('xem')
        })
  };