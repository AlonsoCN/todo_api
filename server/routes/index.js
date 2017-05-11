const todoRouter = require('./api/TodoRouter');
const ROUTE_API = '/api';

module.exports = (app) => {
    // app.get(ROUTE_API, (req, res) => res.status(200).send({
    //     message: 'Welcome to the Todos API!',
    // }));
    //app.get('/api', todosController.list);
    app.use(ROUTE_API, todoRouter);

    app.use(todoRouter);
}