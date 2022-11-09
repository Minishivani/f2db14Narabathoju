var drinks = require('../models/drinks');
// List of all Costumes
exports.drinks_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.drinks_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.drinks_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.drinks_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.drinks_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};