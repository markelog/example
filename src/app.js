// External modules
const Koa = require('koa');

// Koa dependencies
const bodyParser = require('koa-bodyparser');

// Internal dependecies
const config = require('./configs');

// Routers

// Middlewares
const errors = require('./middlewares/errors');
const logger = require('./middlewares/logger');

// Initialize App
const app = new Koa();

// Define the app
app.use(logger());

app.use(errors());
app.use(bodyParser());

app.listen(config.http.port, () => {
  console.log('Started');
});

module.exports = app;
