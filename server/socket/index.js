import axios from 'axios';
import BitcoinRate from "../app/getCurrency";
import getEquities from '../lib/parseExel/equities';

export default class SocketApi {
    constructor(socket) {
        this.io = socket;

        // Count users
        this.users = 0;

        this.rate = new BitcoinRate();
        this.sendRates();
        this.value = [];

        this.initConnection();
    }

    // Handle new connection
    initConnection() {
        this.io.on('connection', (socket) => {
            console.log(`New connection ${socket.id}; Users count: ${this.users += 1}`);

            socket.on('room', (room) => {
                socket.leave(socket.room);
                socket.join(room);

                if(room === 'global_rates') {
                    this.io.to('global_rates')
                        .emit('upadte', this.value);
                }

                console.log(`Person joined to ${room} room`);
            });


            socket.on('_equities', () => {
                socket.emit('equities', getEquities());
            });

            socket.on('disconnect', () => {
                console.log(`Disconnected person ${socket.id}; Users count: ${this.users -= 1}`);
            })
        });
    }

    // Run rates forwarding
    sendRates() {
        this.rate.getData()
            .distinctUntilChanged()
            .subscribe((data) => {
                console.log(`Send Global Rates`);

                this.value = data;

                this.io.to('global_rates')
                    .emit('upadte', data);
        })
    }
}