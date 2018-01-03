import db from '../../db/queries/currencies';

export default {
    getData: async () => {
        return await {
            btc: await db.getCurrenciesByBase('btc'),
            eth: await db.getCurrenciesByBase('eth'),
            xmr: await db.getCurrenciesByBase('xmr'),
            bch: await db.getCurrenciesByBase('bch'),
            xrp: await db.getCurrenciesByBase('xrp'),
            ltc: await db.getCurrenciesByBase('ltc'),
            xem: await db.getCurrenciesByBase('xem')
        }
    },
    getDataByBase: async (base) => await db.getCurrenciesByBase(base)
}