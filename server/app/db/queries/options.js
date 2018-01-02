import knex from '../connection'

async function getAllOptions() {
  return await knex('options')
    .select('*');
}

async function insertItem(item) {
  return await knex('options')
    .insert(item);
}

export default {
  getAllOptions,
  insertItem
}
