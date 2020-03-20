const express = require('express');
const router = express.Router();

const imagenes = require('../database/imagenes.js');

router.post('/imagenes', (req, res) => {
    console.log(req.body);
    let imagenesXGenero = [];

    imagenes.forEach((imagen, i) => {
        console.log(i);
        console.log(imagen.genre[i]);

        for(k = 0; k < imagen.genre.length; k++){
            if(imagen.genre[k] == req.body.type){
                console.log(i, " ", k);
                imagenesXGenero[imagenesXGenero.length] = imagen;
            }
        }
    });

    res.send(imagenesXGenero);
});

module.exports = router;