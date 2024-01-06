const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/cart', function(req, res, next) {
    res.render('cart', { title: 'Ваш кошик' });      
});

module.exports = router;
