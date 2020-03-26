const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

//Initializing
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use(require('./routes'));
app.use('/pages', require('./routes/pages.js'));
app.use('/peliculas', require('./routes/peliculas.js'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});