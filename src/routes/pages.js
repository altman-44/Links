const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.render('secondaries/' + req.body.page);
});

router.get('/:page', (req, res) => {
    res.render('secondaries/' + req.params.page);
});

module.exports = router;