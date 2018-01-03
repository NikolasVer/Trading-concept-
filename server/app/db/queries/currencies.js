import knex from '../connection'

function getCurrenciesByBase(base) {
  return knex(base)
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

function getAllCurrencies() {
  return knex('btc').select('*');
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
  getAllCurrencies,
  getCurrenciesByBase,
  insertItemByBase,
  delValueFromAllColumns,
  checkUniqueTime
}