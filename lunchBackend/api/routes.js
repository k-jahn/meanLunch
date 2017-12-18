// app/routes.js

// load models
var Meal = require('./models/meal');

// export API routes ================================================================
module.exports = function (app) {

    // get meals
    app.get('/api/meal', function (req, res) {
        // Let mongoose find all meals
        Meal.find(function (err, meals) {
            if (err) res.send(err) // report errors
            res.json(meals); // send found meals to client
        });
    });

    // Create a meal and return all meals
    app.post('/api/meal', function (req, res) {
        console.log(req.body);
        Meal.create({
            date: req.body.date, // date
            cookId: req.body.cookId, // id of the cook
            mealName: req.body.mealName, // name of the meal 
            mealDescription: req.body.mealDescription || '', // description of the meal
            vegetarian: req.body.vegetarian || false,
            vegan: req.body.vegan || false,
            dinersMax: 0, //max number of diners
            diners: [0], //array of diner IDs
        }, function (err, meal) {
            if (err) res.send(err);
            res.send('meal created')
        });
    });

    // app.delete(
};