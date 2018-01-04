import { Subject } from 'rxjs';
import SocketMain from '../socket';


class Debt {
    constructor(_socket) {
        this.socket = _socket;
        this.debt$ = new Subject();

        this.main();
    }

    main() {
        this.socket.on('_debt', data => {
            this.debt$.next(data);
        });

        this.socket.emit('debt');
    }

    get data() {
        return this.debt$;
    }
}

export default (() => new Debt(SocketMain.socket))().data;