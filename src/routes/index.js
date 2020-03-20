const express = require('express');
const router = express.Router();
const session = require('express-session');
const path = require('path');

const app = express();

session.users = require('../database/trucha');

app.use(session({
    secret: "123",
    resave: true,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('secondaries/login');
});

router.get('/home', (req, res) => {
    res.render('secondaries/home', {mostrarHeader: true});
})

router.post('/login', (req, res) => {
    console.log(req.body);
    let user_exists = false;
    let index;

    for(i = 0; i < session.users.length; i++){
        console.log(session.users[i]);
        if(req.body.username == session.users[i].username && req.body.pwd == session.users[i].pwd){
            console.log("existe");
            session.username = req.body.username;
            user_exists = true;
            index = i;
        }
    }
    if (user_exists){
        res.render('secondaries/home', {fullname: session.users[index].fullname, mostrarHeader: true});
    }else{
        res.render('secondaries/login', {userNoExist: true});
    }
});

router.get('/prueba', (req, res) => {
    res.send('hola');
});

module.exports = router;