const express = require('express');
const session = require('express-session');
const router = express.Router();

const app = express();

app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized: true
}));

const imagenes = require('../database/imagenes.js');

router.post('/imagenes', (req, res) => {
    let imagenesXGenero = [];

    imagenes.forEach((imagen, i) => {

        for(k = 0; k < imagen.genre.length; k++){
            if(imagen.genre[k] == req.body.type){
                imagenesXGenero[imagenesXGenero.length] = imagen;
            }
        }
    });

    res.send(imagenesXGenero);
});

router.get('/filmData/:id', (req, res) => {
    const id = req.params.id - 1;
    session.imagen = imagenes[id];
    res.redirect('/peliculas/filmData');
    //res.render('secondaries/filmData', {film: imagenes[id]});
});

router.get('/filmData', (req, res) => {
    console.log(session.imagen);
    let generos = [];
    session.imagen.genre.forEach( (generoAux, i) => {
        if(i < (session.imagen.genre.length - 1)){
            generos[generos.length] = generoAux.toUpperCase() + ' |';
        } else{
            generos[generos.length] = generoAux.toUpperCase();
        }
    })
    res.render('secondaries/filmData', {mostrarHeader: true, film: session.imagen, generos})
});

module.exports = router;