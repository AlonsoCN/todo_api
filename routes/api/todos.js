'use strict';

let express = require('express');
let router = express.Router();

let todo = require('../../models').Todo;
// import { todo } from '../../models';

router.route('/')
    .get(function (req, res) {

        todo.findAll().then(function (rows) {
            res.json(rows);
        });

        // todo.findAll().then(rows => res.json(rows));
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

module.exports = router;
