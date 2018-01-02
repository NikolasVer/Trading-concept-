exports.seed = (knex, Promise) => {
  return knex('equities').del()
  .then(() => {
    return knex('equities').insert({
      tsexchange: 'ABD',
      producttype: 'EQT',
      issueclass: 'ETF',
      listings: 1,
      region: 'MEA',
      country: 'AE'
    });
  })
};