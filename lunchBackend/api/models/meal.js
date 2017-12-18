// Model for a meal DB entry

// load mongoose
var mongoose = require('mongoose');

// define schema
var mealSchema = mongoose.Schema({
    date: { type:String, required:true }, // date
    cookId: Number, // id of the cook
    mealName: { type: String, required: true }, // name of the meal 
    mealDescription: String, // description of the meal
    vegetarian: Boolean,
    vegan: Boolean,
    dinersMax: Number, //max number of diners
    diners: [Number], //array of diner IDs
}, { bufferCommands: false });

// export model
module.exports = mongoose.model('Meal', mealSchema);