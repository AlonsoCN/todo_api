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

const models = ['Todo'];

models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// const modelsExports = {};
// models.forEach(model => modelsExports[model] = sequelize.import(__dirname + '/' + model));
// export default modelsExports;