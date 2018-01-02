import knex from '../connection'

async function getAllEquities() {
  return await knex('equities')
    .select('*');
}

export default {
  getAllEquities
}
