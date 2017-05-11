const express = require('express');
const router = express.Router();

const todoController = require('../../controllers/TodoController');
const entityRoute = '/todos'

router
    .get(entityRoute, todoController.list)
    .post(entityRoute, todoController.create);

module.exports = router;
