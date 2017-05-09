const Sequelize = require('sequelize');

let sequelize = new Sequelize('todo_db', 'root', 'ckinakbo32', {
  host: 'localhost',
  dialect: 'mysql',
  
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
});

let models = [
    'Todo',
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});