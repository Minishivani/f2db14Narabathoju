const mongoose = require("mongoose")
const drinkSchema = mongoose.Schema({
drinks_name: String,
company_name: String,
drinks_quantity: Number
})
module.exports = mongoose.model("Drinks",
drinkSchema)