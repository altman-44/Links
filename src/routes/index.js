const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('secondaries/login');
});

router.post('/login')

module.exports = router;