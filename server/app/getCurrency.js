import axios from 'axios';
import { Subject } from 'rxjs'
import { setInterval } from 'timers';

export default class BitcoinRate {
    constructor() {
        this.url = 'https://api.cryptonator.com/api/ticker';
        this.rate = new Subject;
        this.runDataLoop();
    }

    runDataLoop() {
        setInterval(async () => {
            let data = await this.makeRequest();
            this.rate.next(data);
        }, 30000);
    }

    async makeRequest() {
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

    getData() {
        return this.rate;
    }
}