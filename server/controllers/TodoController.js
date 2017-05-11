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
    return Todo
        .update(data, condition)
        .then(serverResponse => {
            let code = 400;
            let jsonResponse = { status: false };
            if (serverResponse[0] === 1) {
                jsonResponse.status = true;
                code = 200;
            }
            response.status(code).send(jsonResponse);
        })
        .catch(error => response.status(400).send(error));
}

exports.delete = (request, response) => {
    const data = request.body;
    const condition = {
        where: {
            id: data.id
        }
    }
    return Todo
        .destroy(condition)
        .then(serverResponse => {
            let code = 400;
            let jsonResponse = { status: false };
            if (serverResponse === 1) {
                jsonResponse.status = true;
                code = 200;
            }
            response.status(code).send(jsonResponse);
        })
        .catch(error => response.status(400).send(error));
}