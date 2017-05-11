module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    }, {
        tableName: 'todo',
        timestamps: false
    });
    return Todo;
};