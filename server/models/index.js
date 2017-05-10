const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const db = {};

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
fs
    .readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        console.log('Loading next models: ');
        const model = sequelize.import(path.join(__dirname, file));        
        db[model.name]  = model;
        console.log(model.name);
    });

/*
Object.keys(db).forEach(modelName => {
    console.log(db[modelName].associate);
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const models = ['Todo'];
// models.forEach( model => module.exports[model] = sequelize.import(__dirname + '/' + model));