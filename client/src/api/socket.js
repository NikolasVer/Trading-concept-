// import { BehaviorSubject } from 'rxjs';
import openSocket from 'socket.io-client';
import config from '../config';
class SocketMain {
    constructor() {
        this._socket = openSocket(config.server);
    }

    get socket() {
        return this._socket;
    }
}

export default new SocketMain();