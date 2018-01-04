import { Subject, BehaviorSubject } from 'rxjs';
import SocketMain from '../socket';
class Futures {
    constructor(_socket) {
        this.socket = _socket;
        this.futures$ = null;

        this.main();
    }

    async main() {
        return await new Promise((resolve, reject) => {
            return this.socket.on('_futures', data => {
                this.futures$ = new BehaviorSubject(data);
                return resolve()
            });

            this.socket.emit('futures');
        })
    }


    get data() {
        return this.futures$;
    }
}

export default new Futures(SocketMain.socket);