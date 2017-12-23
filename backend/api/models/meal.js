// Model for a meal DB entry

// load mongoose
var mongoose = require('mongoose');

// define schema
var mealSchema = mongoose.Schema({
    cookId: { type: String, required:true }, // id of the cook
    date: { // date
        year: { type: Number, required: true },
        week: { type: Number, required: true },
        day: { type: Number, required: true }     
    }, 
    diners: [String], //array of diner IDs
    dinersMax: Number, //max number of diners
    mealDescription: String, // description of the meal
    mealName: { type: String, required: true }, // name of the meal 
    veganity: Number,
    veganityText: String,
});

// export model
module.exports = mongoose.model('Meal', mealSchema);