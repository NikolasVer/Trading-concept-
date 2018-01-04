import knex from '../connection'

function getCurrenciesByBase(base) {
  return knex('currency')
    .select('*')
    .where('base', '=', base);
}

async function checkUniqueTime(base, time) {
  return await knex('currency')
    .select('*')
    .where('base', '=', base)
    .andWhere('time', '=', time)
}

async function insertItem(item) {
  return await knex('currency')
    .insert(item);
}

function getAllCurrencies() {
  return knex('currency')
    .select('*');
}

function delValueFromAllColumns() {
  return knex('currency')
    .select('*')
    .del()
}

export default {
  getCurrenciesByBase,
  checkUniqueTime,
  insertItem,
  getAllCurrencies,
  delValueFromAllColumns
}