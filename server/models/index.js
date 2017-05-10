const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', 'ckinakbo32', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Import each model inside this module
const models = ['Todo'];
models.forEach( model => module.exports[model] = sequelize.import(__dirname + '/' + model));
