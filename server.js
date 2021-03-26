const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
const database = {
    users: [
        {
            id: '123',
            name: 'vipul',
            email: 'vipul@gmail.com',
            password: 'test123456',
            entries: 0,
            joined: new Date()
        },
        {
            id: '123',
            name: 'vipuldeep',
            email: 'vipuldeep95@gmail.com',
            password: 'test123456',
            entries: 0,
            joined: new Date()
        },
    ]
}

app.get('/', (req, res) =>{
    res.send(database.users);
    // res.send('this is working');
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('success');
        } else {
            res.status(400).json('error logging in')
        }
    // res.json('signing');
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
            id: '128',
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.listen(3000, () => {
    console.log('app is listening on 3000');
})

/*
--> res = this is working
/signin --> POST = success/fail (don't want to show strings of password)
/register --> POST = user
/profile/:userID --> GET =user
/image --> PUT --> user (put because we are updated and not creating)
*/