var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var drinks_controller = require('../controllers/test');

// A little function to check if we have an authorized user and continue on
// redirect to login.


// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/drinks', drinks_controller.drinks_create_post);
// DELETE request to delete Costume.
router.delete('/drinks/:id', drinks_controller.drinks_delete);
// PUT request to update Costume.
router.put('/drinks/:id', drinks_controller.drinks_update_put);
// GET request for one Costume.
router.get('/drinks/:id', drinks_controller.drinks_detail);
// GET request for list of all Costume items.
router.get('/drinks', drinks_controller.drinks_list);
module.exports = router;

