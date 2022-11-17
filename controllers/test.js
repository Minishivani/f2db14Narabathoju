var drinks = require('../models/drinks');

// List of all Costumes
exports.drinks_list = async function(req, res) {
    try{
     drinksList = await drinks.find();
    res.send(drinksList);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// List of all Costumes
// for a specific Costume.
/*exports.drinks_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Drinks detail: ' + req.params.id);
};*/

// for a specific drink. 
exports.drinks_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await drinks.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume create on POST.
exports.drinks_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Drinks create POST');
};
// Handle Costume delete form on DELETE.
/*exports.drinks_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};*/

// Handle Costume delete on DELETE.
exports.drinks_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await drinks.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Costume update form on PUT.
exports.drinks_update_put =  async function(req, res) {
 //res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body 
 ${JSON.stringify(req.body)}`) 
     try { 
         let toUpdate = await drinks.findById( req.params.id) 
         // Do updates of properties 
         if(req.body.drinks_name)  
                toUpdate.drinks_name = req.body.drinks_name; 
         if(req.body.company_name) 
         toUpdate.company_name = req.body.company_name; 
         if(req.body.drinks_quantity) 
         toUpdate.drinks_quantity = req.body.drinks_quantity; 
         let result = await toUpdate.save(); 
         console.log("Sucess " + result) 
         res.send(result) 
     } catch (err) { 
         res.status(500) 
         res.send(`{"error": ${err}: Update for id ${req.params.id} 
 failed`); 
     }
 
};

exports.drinks_create_post = async function(req, res) {
    console.log(req.body)
    let document = new drinks();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.drinks_name = req.body.drinks_name;
    document.company_name = req.body.company_name;
    document.drinks_quantity = req.body.drinks_quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.drinks_view_all_Page = async function(req, res) {
    try{
    theDrinks = await drinks.find();
    res.render('drinks', { title: 'Drinks Search Results', results: theDrinks});
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);      
    }
   };

   // Handle a show one view with id specified by query
exports.drinks_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await drinks.findById( req.query.id)
    res.render('drinksdetail',
   { title: 'Drinks Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a drinks.
// No body, no in path parameter, no query.
// Does not need to be async
exports.drinks_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('drinkscreate', { title: 'Drinks Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.drinks_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await drinks.findById(req.query.id)
    res.render('drinksupdate', { title: 'Drinks Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   