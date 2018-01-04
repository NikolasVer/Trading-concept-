import { Subject } from 'rxjs';
import SocketMain from '../socket';
class Options {
    constructor(_socket) {
        this.socket = _socket;
        this.options$ = new Subject();

        this.main();
    }

    main() {
        this.socket.on('_options', data => {
            this.options$.next(data);
        });
        this.socket.emit('options');
    }

    get data() {
        return this.options$;
    }
}

export default (() => new Options(SocketMain.socket))().data;