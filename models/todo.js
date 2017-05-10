'use strict';

module.exports = function(sequelize, DataTypes) {
    let Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        complete: {
            type: DataTypes.BOOLEAN
        }
    }, {
        tableName: 'todo',
        // timestamp: false,
        timestamps: false,
        // createdAt: false,
        // updatedAt: false
    });
    return Todo;
};