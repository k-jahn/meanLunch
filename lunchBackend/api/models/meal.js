// Model for a meal DB entry

// load mongoose
var mongoose = require('mongoose');

// define schema
var mealSchema = mongoose.Schema({
    date: { type: Number, required:true }, // date
    cookId: { type:Number, required:true }, // id of the cook
    mealName: { type: String, required: true }, // name of the meal 
    mealDescription: String, // description of the meal
    vegetarian: Boolean,
    vegan: Boolean,
    dinersMax: Number, //max number of diners
    diners: [Number], //array of diner IDs
});

// export model
module.exports = mongoose.model('Meal', mealSchema);