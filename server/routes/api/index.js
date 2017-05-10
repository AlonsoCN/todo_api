const todosController = require('../../controllers').todos;

module.exports = (app) => {
    app.get('/api', todosController.list);
}