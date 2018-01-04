import axios from 'axios';
import { Subject } from 'rxjs'
import { setInterval } from 'timers';
import db from '../db/queries/currencies';
import {_parseItem} from './helpers/currencyHelper';

export default class CurrencyRate {
    constructor() {
        this.url = 'https://api.cryptonator.com/api/ticker';
        this.rate = new Subject;
        this.main();
        this.dataLoop();
    }

    main() {
        // db.delValueFromAllColumns().then((data) => {
        //     console.log('Value removed!');
        // });

        this.rate.subscribe(data => {
            data.map(async item => {
                return await this.insertToDatabase(item);
            });
        });
    }

    insertToDatabase(item) {
        let data = _parseItem(item);

        return db.checkUniqueTime(data.base, data.time)
            .then(_data => {
                if(_data.length) return Promise.resolve();
                return db.insertItem(data);
            });
    }

    async dataLoop() {
        setInterval(async () => {
            let data = await this.getData();
            this.rate.next(data);
        }, 40000);
    }

    async getData() {
        return await Promise.all([
            axios.get(`${this.url}/btc-usd`).then(res => res.data),
            axios.get(`${this.url}/eth-usd`).then(res => res.data),
            axios.get(`${this.url}/xmr-usd`).then(res => res.data),
            axios.get(`${this.url}/bch-usd`).then(res => res.data),
            axios.get(`${this.url}/xrp-usd`).then(res => res.data),
            axios.get(`${this.url}/ltc-usd`).then(res => res.data),
            axios.get(`${this.url}/xem-usd`).then(res => res.data),
        ]);
    }

   get data() {
        return this.rate;
    }
}