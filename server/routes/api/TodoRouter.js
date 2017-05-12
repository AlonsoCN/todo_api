const express = require('express');
const router = express.Router();

const todoController = require('../../controllers/TodoController');
const entityRoute = '/todos'

router
    .get(entityRoute, todoController.list)
    .post(entityRoute, todoController.create)
    .put(entityRoute, todoController.update)
    .delete(entityRoute + '/:idTodo', todoController.delete);

module.exports = router;
