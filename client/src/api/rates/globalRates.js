import { Subject } from 'rxjs';
import openSocket from 'socket.io-client';
import config from '../../config';

const GlobalRates$ = new Subject();

const room = 'global_rates';

const socket = openSocket(config.server);

socket.on('connect', () => {
    socket.emit('room', room);
});

socket.on('upadte', (data) => {
    console.log(`Get Global Rates`);
    GlobalRates$.next(data);
});

export default GlobalRates$;