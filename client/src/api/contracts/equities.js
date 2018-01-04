import { Subject } from 'rxjs';
import SocketMain from '../socket';

class Equities {
    constructor(_socket) {
        this.socket = _socket;
        this.equities$ = new Subject();

        this.main();
    }

    main() {
        this.socket.on('_equities', data => {
            this.equities$.next(data);
        });
        this.socket.emit('equities');
    }

    get data() {
        return this.equities$;
    }
}

export default (() => new Equities(SocketMain.socket))().data;