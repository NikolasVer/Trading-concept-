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
            await db.getCurrenciesByBase('XEM'),
            // {btc: await db.getCurrenciesByBase('BTC')},
            // {eth: await db.getCurrenciesByBase('ETH')},
            // {xmr: await db.getCurrenciesByBase('XMR')},
            // {bch: await db.getCurrenciesByBase('BCH')},
            // {xrp: await db.getCurrenciesByBase('XRP')},
            // {ltc: await db.getCurrenciesByBase('LTC')},
            // {xem: await db.getCurrenciesByBase('XEM')}
        ]
    },
    getDataByBase: async (base) => await db.getCurrenciesByBase(base)
}