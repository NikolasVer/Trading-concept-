import { Subject } from 'rxjs';
import openSocket from 'socket.io-client';
import config from '../config';

const Equities$ = new Subject();

const socket = openSocket(config.server);

socket.on('connect', () => {
  socket.emit('_equities');
});

socket.on('equities', (data) => {
  Equities$.next(data);
});


export default Equities$;