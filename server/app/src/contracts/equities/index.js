import db from '../../../db/queries/equities';

export default {
    getData: async () => await db.getAllEquities()
}