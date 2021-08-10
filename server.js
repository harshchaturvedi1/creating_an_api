const { request, response } = require('express');
const express = require('express');
const users = require('./user.json');

const app = express();

// middle ware
app.use(express.json());

app.get('/', (request, response) => {
    return response.send('Welcome to Home Page...')
})

app.get('/users', (request, response) => {
    return response.send({ users: users });
})


app.post('/users', (request, response) => {
    // parsing is important
    // users.push(JSON.parse(request.params.body));
    users.push(request.body);
    return response.send(`user added with details`)
})

app.patch('/user', (request, response) => {
    // let user_name = request.params.user;
    // let id = request.params.id;
    let x = request.body;
    for (ele of users) {
        if (ele.id == x.id) {
            ele.first_name = x.first_name
            break;
        }
    }
    response.send(`user details updated `)
})

app.delete('/user', (request, response) => {
    let id = request.body.id;

    for (var i = 0; i < users.length; i++) {

        if (users[i].id == id) {

            users.splice(i, i + 1);
        }

    }
    response.send(` user details deleted with id `)
})



app.listen(8000, () => {
    console.log('listening to port 8000')
})