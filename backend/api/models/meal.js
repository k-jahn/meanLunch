// Model for a meal DB entry

// load mongoose
var mongoose = require('mongoose');

// define schema
var mealSchema = mongoose.Schema({
    date: { // date
        year: { type: Number, required: true },
        week: { type: Number, required: true },
        day: { type: Number, required: true }     
    }, 
    cookId: { type: String, required:true }, // id of the cook
    mealName: { type: String, required: true }, // name of the meal 
    mealDescription: String, // description of the meal
    veganity: Number,
    dinersMax: Number, //max number of diners
    diners: [String], //array of diner IDs
});

// export model
module.exports = mongoose.model('Meal', mealSchema);