//let Todo = require('../models/Todo')();
let Todo = require('../models').Todo;

exports.list = (req, res) => {
    return Todo
        .findAll()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
};

exports.create = (req, res) => {};

// module.exports = {
//     list(req, res) {
//         console.log('TodoController');
//         console.log(typeof(Todo));
//         res.send('asd');
//         //res.send(Todo);
//         // return Todo
//         //     .findAll()
//         //     .then(todos => res.status(200).send(todos))
//         //     .catch(error => res.status(400).send(error));
//     },
//     create(req, res) {
//         console.log('todo.create');
//         console.log(req.body);
//         // return Todo
//         //     .create({
//         //         title: req.body.title,
//         //         complete: req.body.complete
//         //     })
//         //     .then(todo => res.status(201).send(todo))
//         //     .catch(error => res.status(400).send(error));
//     },
// };