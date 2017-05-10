const express = require('express');
const router = express.Router();

const todosController = require('../../controllers').todos;

router.route('/')
    .get(function (req, res) {
        console.log('1');
        todosController.list;
        console.log('2');
    })
    .post(function (req, res) {
        todosController.create();
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

module.exports = router;
