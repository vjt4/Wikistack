const express = require('express');
const router = express.Router();
const addpage = require('../views/addPage')

router.get('/', (req, res, next) => {
    res.send('wiki get');
})

router.post('/', (req, res, next) => {
    res.send('wiki post');
})

router.get('/add', (req, res, next) => {
    res.send(addpage());
})




module.exports = router;