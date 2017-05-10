const Todo = require('../models').Todo;

module.exports = {
    list(req, res) {
        console.log(req);
        console.log('1.1');
        console.log(req);
        // return Todo
        //     .findAll()
        //     .then(todos => res.status(200).send(todos))
        //     .catch(error => res.status(400).send(error));
        res.send('asd');
    },
    create(req, res) {
        console.log(req.body);
        return Todo
            .create({
                title: req.body.title,
                complete: req.body.complete
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
};