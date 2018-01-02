import Router from 'koa-router';
import convert from 'koa-convert';
import KoaBody from 'koa-body';

const router = new Router(),
      koaBody = convert(KoaBody());

router.get('/', async(ctx, next) => {
    ctx.body = 'Hello world!';
});

export function routes() { return router.routes()};
export function allowedMethods() {return router.allowedMethods()};