const { request, response } = require('express');
const express = require('express');
const users = require('./user.json');

const app = express();



app.get('//', (request, response) => {
    return response.send('Welcome to Home Page...')
})

app.get('/users', (request, response) => {
    return response.send({ users: users });
})


app.post('/users/:body', (request, response) => {
    // parsing is important
    users.push(JSON.parse(request.params.body));
    return response.send('added')
})

app.patch('/users/:id/:user', (request, response) => {
    let user_name = request.params.user;
    let id = request.params.id;

    for (ele of users) {
        if (ele.id == id) {
            ele.first_name = user_name
            break;
        }
    }
    response.send('updated')
})

app.delete('/users/:id', (request, response) => {
    let id = request.params.id;

    for (var i = 0; i < users.length; i++) {

        if (users[i].id == id) {

            users.splice(i, 1);
        }

    }
    response.send('deleted')
})



app.listen(8000, () => {
    console.log('listening to port 8000')
})