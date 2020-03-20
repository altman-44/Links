const express = require('express');
const router = express.Router();

const imagenes = require('../database/imagenes.js');

router.post('/imagenes', (req, res) => {
    console.log(req.body);
    let imagenesAEnviar = [];
    imagenes.forEach((imagen, i) => {
        if(imagen.genre[i] == req.body.type){
            console.log(i);
            imagenesAEnviar[imagenesAEnviar.length] = imagen;
        }
    });
    res.send(imagenesAEnviar);
});

module.exports = router;