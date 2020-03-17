const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('secondaries/home');
});

router.post('/login')

module.exports = router;