const express = require('express');
const router = express.Router();

const todo = require('../../models').Todo;

router.route('/')
    .get(function (req, res) {
        todo.findAll().then(rows => res.json(rows));
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

module.exports = router;
