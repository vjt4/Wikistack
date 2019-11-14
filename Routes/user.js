const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('user get');
})


module.exports =  router;