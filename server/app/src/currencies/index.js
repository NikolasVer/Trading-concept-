import db from '../../db/queries/currencies';

export default {
    getData: async () => {
        return await [
            await db.getCurrenciesByBase('BTC'),
            await db.getCurrenciesByBase('ETH'),
            await db.getCurrenciesByBase('XMR'),
            await db.getCurrenciesByBase('BCH'),
            await db.getCurrenciesByBase('XRP'),
            await db.getCurrenciesByBase('LTC'),
            await db.getCurrenciesByBase('XEM')
        ]
    },
    getDataByBase: async (base) => await db.getCurrenciesByBase(base)
}