// const express = require('express');
// const router = express.Router();

// /* GET home page. */
// router.get('/', (req, res, next) => res.render('index', { title: 'Express' }));

// module.exports = router;

const todosController = require('../controllers').todos;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    //app.get('/api', todosController.list);
}