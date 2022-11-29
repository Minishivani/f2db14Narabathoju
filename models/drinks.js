const mongoose = require("mongoose")
const drinkSchema = mongoose.Schema({
drinks_name: {
    type: String, 
    required: true
},
company_name:{
    type: String, 
    required: true
} ,
drinks_quantity: {
    type: Number, 
    min:0,max:200,
    required: true 
}
})
module.exports = mongoose.model("Drink",
drinkSchema)