const todoRouter = require('./api/TodoRouter');
const ROUTE_API = '/api';

module.exports = (app) => {
    app.use(ROUTE_API, todoRouter);

    app.use(todoRouter);
}