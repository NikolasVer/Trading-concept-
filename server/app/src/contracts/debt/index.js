import db from '../../../db/queries/debt';

export default {
    getData: async () => await db.getAllDebts()
}