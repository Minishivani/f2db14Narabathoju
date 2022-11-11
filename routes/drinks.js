var express = require('express');
const drinks_controlers= require('../controllers/test');
var router = express.Router();

router.get('/', drinks_controlers.drinks_view_all_Page );
router.get('/drinks/:id', drinks_controlers.drinks_detail); 
module.exports = router;
