import db from '../../../db/queries/futures';

export default {
    getData: async () => await db.getAllFutures()
}