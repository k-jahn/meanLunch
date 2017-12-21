// app/routes.js



// load models
const Meal = require('./models/meal');
const User = require('./models/user');

// load quick and dirty sanitizer
const sanitize = require('./sanitize');

// export API routes ================================================================
module.exports = function (app) {

    // meals api --------------------------------------------------------------
    //  mongoose.find meals
    const getMeals = function(par, req, res) {
        Meal.find(par)
            .limit(20)
            .exec(function (err, meals) {
                if (err) res.send(err) // report errors
                else {
                    const resJson = {
                        api: 'lunch api v0.0.0 /meals',
                        params: req.params,
                        meals: meals
                    };
                    res.json(resJson); // send found meals to client
                }
            });
    }
    // routes for GET meals
    app.get('/api/meal/:year/:week/:day', function (req, res) {
        getMeals({
                'date.year': req.params.year, 
                'date.week': req.params.week,
                'date.day': req.params.day,
            }, req, res)
    });
    app.get('/api/meal/:year/:week/', function (req, res) {
        getMeals({
                'date.year': req.params.year, 
                'date.week': req.params.week,
            }, req, res)
    });
    app.get('/api/meal/:year/', function (req, res) {
        getMeals({
                'date.year': req.params.year, 
            }, req, res)
    });
    app.get('/api/meal/', function (req, res) {
        let currentDate = new Date();
        getMeals({
                'date.year': currentDate.getFullYear(), // current.year 
                'date.week': 0, // current week
                'date.day': req.params.day,
            }, req, res)
    });

    // route for POST meal 
    app.post('/api/meal', function (req, res) {
        // sanitize input
        const input = sanitize(req.body);
        // create entry
        Meal.create({
            date: input.date, // date
            cookId: input.cookId, // id of the cook
            mealName: input.mealName, // name of the meal 
            mealDescription: input.mealDescription || '', // description of the meal
            vegetarian: input.vegetarian || false,
            vegan: input.vegan || false,
            dinersMax: input.dinersMax || 0, //max number of diners
            diners: input.diners || [], //array of diner IDs
        }, function (err, meal) {
            if (err) res.send(err);
            else res.send('meal created: ' + JSON.stringify(input));
        });
    });
    
    // delete meal
    
    // put meal
    
    // users api ---------------------------------------------------------------------
    //  mongoose.find user
    const getUsers= function(par, req, res) {
        return User.find(par)
            .exec(function (err, user) {
                if (err) res.send(err) // report errors
                const resJson = {
                    api: 'lunch api v0.0.0 /users',
                    params: req.params,
                    users: user
                };
                res.json(resJson); // send users to client
            }); 
    }
    // routes for GET users
    app.get('/api/user/:id/', function (req, res) {
        getUsers({_id: req.params.id}, req, res)
    });
    app.get('/api/user/', function (req, res) {
        getUsers({}, req, res)
    });

    // route for POST user
    app.post('/api/user', function(req, res) {
        // sanitize input
        const input = sanitize(req.body);
        User.create({
            name: input.name,
            vegetarian: input.vegetarian,
            vegan: input.vegetarian
        }, function (err, user) {
            if (err) res.send(err);
            else res.send('user '+user.id+ 'created:' + JSON.stringify(input));
        })
    });

};