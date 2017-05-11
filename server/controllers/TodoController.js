let Todo = require('../models').Todo;

exports.list = (req, res) => {
    return Todo
        .findAll()
        .then(todos => res.status(200).send(todos))
        .catch(error => res.status(400).send(error));
};

exports.create = (req, res) => {
    return Todo
        .create({
            title: req.body.title,
            complete: req.body.complete
        })
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
};