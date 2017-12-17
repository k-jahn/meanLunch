// app/models/meal.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    date: String, // date
    cookId: Number, // id of the cook
    mealName: String, // name of the meal 
    mealDescription: String, // description of the meal
    vegetarian: Boolean,
    vegan: Boolean,
    dinersMax: Number, //max number of diners
    diners: [Number], //array of diner IDs
});