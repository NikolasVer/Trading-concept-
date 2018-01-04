import { Subject } from 'rxjs';
import SocketMain from '../socket';

class Futures {
    constructor(_socket) {
        this.socket = _socket;
        this.futures$ = new Subject();

        this.main();
    }

    main() {
        this.socket.on('_futures', data => {
            this.futures$.next(data);
        });
        this.socket.emit('futures');
    }

    get data() {
        return this.futures$;
    }
}

export default (() => new Futures(SocketMain.socket))().data;