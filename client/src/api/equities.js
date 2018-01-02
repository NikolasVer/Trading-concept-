import { Subject } from 'rxjs';
import openSocket from 'socket.io-client';
import config from '../config';

const Equities$ = new Subject();

const socket = openSocket(config.server);

socket.on('connect', () => {
  socket.emit('equities');
  socket.emit('futures');
  socket.emit('options');
  socket.emit('debt');
});

socket.on('_equities', (data) => {
  console.log('equities', data);
});

socket.on('_futures', (data) => {
  console.log('futures', data);
});

socket.on('_options', (data) => {
  console.log('options', data);
});

socket.on('_debt', (data) => {
  console.log('debt', data);
});

export default Equities$;