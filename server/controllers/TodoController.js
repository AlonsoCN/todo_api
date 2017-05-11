let Todo = require('../models').Todo;

exports.list = (request, response) => {
    return Todo
            .findAll()
            .then(todos => response.status(200).send(todos))
            .catch(error => response.status(400).send(error));
};

exports.create = (request, response) => {
    const data = request.body;
    return Todo
        .create({
            title: data.title,
            complete: data.complete
        })
        .then(todo => response.status(201).send(todo))
        .catch(error => response.status(400).send(error));
};

exports.update = (request, response) => {
    const data = request.body;
    const condition = {
        where: {
            id: data.id
        }
    }
    let code = 400;
    return Todo
        .update(data, condition)
        .then(serverResponse => {
            let message = 'Not updated';
            if (serverResponse[0] === 1) {
                message = 'Updated';
                code = 200;
            }
            response.status(code).send(message);
        });
}

exports.delete = (request, response) => {
    const data = request.body;
    const condition = {
        where: {
            id: data.id
        }
    }
    let code = 400;
    return Todo
        .destroy(condition)
        .then(serverResponse => {
            let message = 'Not deleted';
            if (serverResponse === 1)
                message = 'Deleted';
            response.status(200).send(message);
        })
        .catch(error => response.status(400).send(error));
}