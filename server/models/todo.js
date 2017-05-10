module.exports = function (sequelize, DataTypes) {
    const Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        complete: {
            type: DataTypes.BOOLEAN
        }
    }, {
        tableName: 'todo',
        timestamps: false
    });
    return Todo;
};