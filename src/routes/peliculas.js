const express = require('express');
const router = express.Router();

const imagenes = require('../database/imagenes.js');

router.post('/imagenes', (req, res) => {
    res.send(imagenes);
});

module.exports = router;