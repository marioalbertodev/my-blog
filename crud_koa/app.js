const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('./config/server');
const users = require('./components/users/routes');

const app = new Koa();

app.use(bodyParser());

app.use(users.prefix('/users').routes());
app.use(users.allowedMethods());

app.listen(config.api.port, () => {
  console.log(`API listen in port ${config.api.port}`);
});