// app/routes.js

// load models
var Meal = require('./models/meal');
var User = require('./models/user');

// quick and dirty sanitizing
function san(str) {
    return str.replace(/[^A-Za-z0-9.\-! ]/g, '')
}

// export API routes ================================================================
module.exports = function (app) {

    // meals api --------------------------------------------------------------
    // get meals
    app.get('/api/meal/:year/:week/:day', function (req, res) {
        //  mongoose.find meals
        Meal.find({
                'date.year': req.params.year || /./, // todo current day
                'date.week': req.params.week || /./, // todo current week
                'date.day': req.params.day || /./,
            })
            .limit(20)
            .exec(function (err, meals) {
                if (err) res.send(err) // report errors
                else {
                    const resJson = {
                        api: 'lunch api v0.0.0 /meals',
                        meals: meals,
                    };
                    res.json(resJson); // send found meals to client
                }
            });
    });
    
    // Create a meal 
    app.post('/api/meal', function (req, res) {
        // console.log(req.body);
        Meal.create({
            date: req.body.date, // date
            cookId: req.body.cookId, // id of the cook
            mealName: san(req.body.mealName), // name of the meal 
            mealDescription: san(req.body.mealDescription) || '', // description of the meal
            vegetarian: req.body.vegetarian || false,
            vegan: req.body.vegan || false,
            dinersMax: 0, //max number of diners
            diners: [0], //array of diner IDs
        }, function (err, meal) {
            if (err) res.send(err);
            else res.send('meal created: ' + JSON.stringify(req.body));
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