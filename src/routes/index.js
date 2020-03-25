const express = require('express');
const router = express.Router();
const session = require('express-session');

const app = express();

session.users = require('../database/users');

app.use(session({
    secret: "123",
    resave: true,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('secondaries/login', {ocultarOpcionesHeader: true});
});

router.get('/home', (req, res) => {
    res.render('secondaries/home');
});

router.get('/films', (req, res) => {
    res.render('secondaries/films');
})

router.get('/:page', (req, res) => {
    console.log(req.params);
    res.render('secondaries/home');
});

router.post('/login', (req, res) => {
    let user_exists = false;
    let index;

    for(i = 0; i < session.users.length; i++){
        console.log(session.users[i]);
        if(req.body.username == session.users[i].username && req.body.pwd == session.users[i].pwd){
            session.username = req.body.username;
            user_exists = true;
            session.index = i;
        }
    }
    if (user_exists){
        res.render('secondaries/home', {fullname: session.users[session.index].fullname});
    }else{
        res.render('secondaries/login', {userNoExist: true});
    }
});

module.exports = router;