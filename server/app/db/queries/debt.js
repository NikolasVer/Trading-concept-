import knex from '../connection'

async function getAllDebts() {
  return await knex('debt')
    .select('*');
}

async function insertItem(item) {
  return await knex('debt')
    .insert(item);
}

export default {
  getAllDebts,
  insertItem
}
