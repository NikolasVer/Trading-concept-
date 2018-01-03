import axios from 'axios';
import BitcoinRate from "../src/currencyRate";
import EventHandler from './EventHandler';

export default class SocketController {
    constructor(socket) {
        this.io = socket;
        this.users = 0;
        this.initConnection();
    }

    // Handle new connection
    initConnection() {
        this.io.on('connection', (socket) => {
            console.log(`New connection ${socket.id}; Users count: ${this.users += 1}`);

            new EventHandler(socket);

            socket.on('disconnect', () => {
                console.log(`Disconnected person ${socket.id}; Users count: ${this.users -= 1}`);
            })
        });
    }
}