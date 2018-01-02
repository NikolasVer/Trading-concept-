import { Subject } from 'rxjs';
import openSocket from 'socket.io-client';
import config from '../../config';

const BTC_USD$ = new Subject();

const room = 'BTC_USD';

const socket = openSocket(config.server);

socket.on('connect', () => {
    socket.emit('room', room);
});

socket.on('upadte', (data) => {

    console.log(`Get BTC_USD ${data}`);

    BTC_USD$.next(data);
});

export default BTC_USD$;