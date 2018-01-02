import equities from '../src/equities';

class EventHandler {
    constructor(socket, io) {
        this.socket = socket;

        this.initEvents();
    }

    initEvents() {
        this.socket
            .on('room', this.roomHandler.bind(this))
            .on('equities', this.equitiesHandler.bind(this));
    }

    roomHandler(room) {
        this.socket.leave(this.socket.room);
        this.socket.join(room);

        console.log(`Person joined to ${room} room`);
    }

    equitiesHandler() {
        console.log('Emit equities!');
        equities.getData().then(equitiesData => {
            this.socket.emit('_equities', equitiesData);
        })
    }
}

export default EventHandler;