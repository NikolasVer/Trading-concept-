import knex from '../connection'

async function getCurrenciesByBase(base) {
  return await knex(base)
    .select('*')
}

async function checkUniqueTime(base, time) {
  return await knex(base)
    .select('*')
    .where('time', '=', time)
}

async function insertItemByBase(item, base) {
  return await knex(base)
    .insert(item);
}

function delValueFromAllColumns() {
  return knex('btc').select('*').del()
      .then(() => knex('eth').select('*').del())
      .then(() => knex('xmr').select('*').del())
      .then(() => knex('bch').select('*').del())
      .then(() => knex('xrp').select('*').del())
      .then(() => knex('ltc').select('*').del())
      .then(() => knex('xem').select('*').del());
}

export default {
  getCurrenciesByBase,
  insertItemByBase,
  delValueFromAllColumns,
  checkUniqueTime
}