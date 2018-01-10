import Koa from 'koa';
import http from 'http';
import err from './middleware/error';
import SocketApi from './socket';
import {routes, allowedMethods } from './middleware/routes';
import IO from 'socket.io';
import CurrencyRate from './src/currencyRate';

const app = new Koa();
const io = IO();


const server = http.createServer(app.callback());
const port= 8081;

io.attach(server);

new SocketApi(io);

new CurrencyRate();

// Provide the context with the io object.
app.use((ctx, next) => {
    ctx.io = io;
    return next();
});

// Error handler
app.use(err);

// Routes
app.use(routes());
app.use(allowedMethods());

// Time tracker
app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// Logger
app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

server.listen({port}, () => {
    console.log(`Server runnig on ${port} port`);
});