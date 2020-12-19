const Koa = require('koa');
const Router = require('@koa/router');
const config = require('./config/server');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Hola mundo!!!';
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.api.port, () => {
  console.log(`API listen in port ${config.api.port}`);
});