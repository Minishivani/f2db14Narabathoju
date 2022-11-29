var express = require('express');
const drinks_controlers= require('../controllers/test');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', drinks_controlers.drinks_view_all_Page );
router.get('/drinks/:id', drinks_controlers.drinks_detail); 

router.get('/detail', drinks_controlers.drinks_view_one_Page);

/* GET create drinks page */
router.get('/create',secured, drinks_controlers.drinks_create_Page);

/* GET create update page */
router.get('/update', secured,drinks_controlers.drinks_update_Page);

/* GET delete costume page */
router.get('/delete',secured, drinks_controlers.drinks_delete_Page);

module.exports = router;
