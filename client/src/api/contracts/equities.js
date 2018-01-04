import { Subject, BehaviorSubject } from 'rxjs';
import SocketMain from '../socket';
class Equities {
    constructor(_socket) {
        this.socket = _socket;
        this.equities$ = null;

        this.main();
    }

    async main() {
        return await new Promise((resolve, reject) => {
            this.socket.on('_equities', data => {
                this.equities$ = new BehaviorSubject(data);
                return resolve()
            });

            this.socket.emit('equities');
        })
    }


    get data() {
        return this.equities$;
    }
}

export default new Equities(SocketMain.socket);