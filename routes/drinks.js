var express = require('express');
var router = express.Router();

router.get('/',function(reg, res, next) {
    res.render('Drinks', {title: 'Search Results of Drinks'});
});

module.exports = router;