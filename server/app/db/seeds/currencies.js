exports.seed = (knex, Promise) => {
    return knex('btc').del()
    .then(() => {
      return knex('btc').insert({
        base: 'BTC',
        fullName: 'Bitcoin',
        price: 443.7807865468,
        time: 1399490941
      });
    })
  };