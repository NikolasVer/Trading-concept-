import { Subject } from 'rxjs';
import SocketMain from '../socket';
class Currencies {
    constructor(_socket) {
        this.currencies$ = new Subject();
        this.socket = _socket;

        this.main();
    }

    main() {
        this.socket.on('_currencies', data => {
            this.currencies$.next(data);
        });

        this.socket.emit('currencies');
    }

    get data() {
        return this.currencies$;
    }
}

export default (() => new Currencies(SocketMain.socket))().data;