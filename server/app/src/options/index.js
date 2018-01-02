import db from '../../db/queries/options';

export default {
    getData: async () => await db.getAllOptions()
}