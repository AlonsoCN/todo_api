const express = require('express');
const router = express.Router();

const todosController = require('../../controllers').todos;

router.route('/')
    .get(function (req, res) {
        todosController.list();
    })
    .post(function (req, res) {
        todosController.create();
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

module.exports = router;
