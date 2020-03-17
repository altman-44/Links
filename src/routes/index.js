const express = require('express');
const router = express.Router();
const session = require('express-session');

session.users = require('./database/trucha');

app.use(session({
    secret: "123",
    resave: true,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('secondaries/login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    let user_exists = false;
    let index;

    for(i = 0; i < session.users.length; i++){
        if(req.body.username == session.users[i].username){
            session.username = req.body.username;
            user_exists = true;
            index = i;
        }
    }
    if (user_exists){
        res.render('/home', {fullname: session.data[i].fullname});
    }else{
        res.render('/login', {userNoExist = true});
    }
});

module.exports = router;