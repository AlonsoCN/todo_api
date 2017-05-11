module.exports = (sequelize, DataTypes) => {
    console.log('model/Todo');
    const Todo = sequelize.define('Todo', {
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