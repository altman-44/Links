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

    let generos = ponerBarraAlCostado(session.imagen.genre);
    let protagonistas = ponerBarraAlCostado(session.imagen.protagonists);
    let premios = ponerBarraAlCostado(session.imagen.awards);

    res.render('secondaries/filmData', {mostrarHeaderCompleto: true, film: session.imagen, generos, protagonistas, premios})
});

function ponerBarraAlCostado(vector){
    let vectorAux = [];
    vector.forEach( (elemento, i) => {
        if(i < vector.length - 1){
            vectorAux.push(elemento + ' |');
        } else {
            vectorAux.push(elemento);
        }
    });

    return vectorAux;
}

module.exports = router;