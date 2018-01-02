import knex from '../connection'

async function getAllFutures() {
  return await knex('futures')
    .select('*');
}

async function insertItem(item) {
  return await knex('futures')
    .insert(item);
}

export default {
  getAllFutures,
  insertItem
}
