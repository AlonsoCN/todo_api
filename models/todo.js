'use strict';

let Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return Todo = sequelize.define('Todo', {
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        complete: {
            type: Sequelize.BOOLEAN
        }
    });
};


// let db = require('./db'),
//     sequelize = db.sequelize,
//     Sequelize = db.Sequelize;

// let Todo = sequelize.define('todo', {
//     title: {
//         type: Sequelize.STRING,
//         field: 'title'
//     },
//     complete: {
//         type: Sequelize.BOOLEAN
//     }
// });

// module.exports = Todo;