module.exports = function (sequelize, DataTypes) {
    let Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        complete: DataTypes.BOOLEAN
    }, {
        tableName: 'todo',
        timestamps: false
    });
    return Todo;
};