// app/routes.js

// load models
var Meal = require('./models/meal');
var User = require('./models/user');


// export API routes ================================================================
module.exports = function (app) {

    // meals api --------------------------------------------------------------
    // get meals
    app.get('/api/meal/', function (req, res) {
        //  mongoose.find meals
        Meal.find(function (err, meals) {
            if (err) res.send(err) // report errors
            else res.json(meals); // send found meals to client
        });
    });
    
    // Create a meal 
    app.post('/api/meal', function (req, res) {
        // console.log(req.body);
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
            else res.send('meal created');
        });
    });
    
    // delete meal
    
    // put meal
    
    // users api ---------------------------------------------------------------------
    app.get('/api/user/', function (req, res) {
        //  mongoose.find user
        User.find(function (err, user) {
            if (err) res.send(err) // report errors
            res.json(user); // send users to client
        });
    });

    app.post('api/user', function(req, res) {
        User.create({
            name: req.body.name,
            vegetarian: req.body.vegetarian || false,
            vegan: req.body.vegetarian || false
        })

    });

    
};