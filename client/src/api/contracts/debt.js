import { Subject, BehaviorSubject } from 'rxjs';
import SocketMain from '../socket';
class Debt {
    constructor(_socket) {
        this.socket = _socket;
        this.debt$ = null;

        this.main();
    }

    async main() {
        return await new Promise((resolve, reject) => {
            this.socket.on('_debt', data => {
                this.debt$ = new BehaviorSubject(data);
                return resolve()
            });

            this.socket.emit('debt');
        })
    }

    get data() {
        return this.debt$;
    }
}

export default new Debt(SocketMain.socket);