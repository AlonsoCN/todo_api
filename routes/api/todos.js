'use strict';

let express = require('express');
let router = express.Router();
//let sql = require('sequelize');

//let Todo = require('../../models/todo');
let models = require('../../models');

router.route('/')
    .get(function (req, res) {
        // let data = {
        //     status : 200,
        //     result : [
        //         {
        //             "id": 1,
        //             "title": "Do homework",
        //             "complete": false
        //         },
        //         {
        //             "id": 2,
        //             "title": "Sleep to get ready for party",
        //             "complete": false
        //         },
        //         {
        //             "id": 3,
        //             "title": "Take a shower and get dressed",
        //             "complete": false
        //         },
        //         {
        //             "id": 4,
        //             "title": "Go to Daniel's party",
        //             "complete": false
        //         },
        //         {
        //             "id": 5,
        //             "title": "Get drunk as f*ck",
        //             "complete": false
        //         }
        //     ]
        // };
        models.findOne().then(function(todo) {
            console.log(todo.get('title'));
        });

        // res.json(data);
        res.json({});
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

module.exports = router;
