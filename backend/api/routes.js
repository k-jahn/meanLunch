// app/routes.js

// load version nr
const version = require('./version').module

// load models
const Meal = require('./models/meal');
const User = require('./models/user');

// load quick and dirty sanitizer
const sanitize = require('./sanitize');

// export API routes ================================================================
module.exports = function (app) {

    // meals API --------------------------------------------------------------
    // mongoose.find meals
    const getMeals = function(par, req, res) {
        Meal.find(par)
            .limit(20)
            .exec(function (err, meals) {
                if (err) res.send(err) // report errors
                else {
                    const resJson = {
                        api: version + ' /meals',
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
        var meal = new Meal(input);
        meal.save(function (err, meal) {
            if (err) res.send(err);
            else res.send('meal created');
        });
    });
    // todo delete meal
    // todo put meal

    // users API ---------------------------------------------------------------------
    // mongoose.find user
    const getUsers= function(par, req, res) {
        return User.find(par)
            .exec(function (err, user) {
                if (err) res.send(err) // report errors
                else {
                    const resJson = {
                        api: version+' /users',
                        params: req.params,
                        users: user
                    };
                    res.json(resJson); // send users to client
                }
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
        var user = new User(input);
        user.save(function (err, user) {
            if (err) res.send(err);
            else res.send(user.id);
        })
    });

    //  comments API ---------------------------------------------------------------------
    //  mongoose.find coment
    const getComments= function(par, req, res) {
        return Comment.find(par)
            .exec(function (err, comment) {
                if (err) res.send(err) // report errors
                else {
                    const resJson = {
                        api: version + ' /comments',
                        params: req.params,
                        comments: comment
                    };
                    res.json(resJson); // send comments to client
                }
            }); 
    }
    // routes for GET comments
    app.get('/api/comment/:id/', function (req, res) {
        getcomments({_id: req.params.id}, req, res)
    });
    app.get('/api/comment/', function (req, res) {
        getcomments({}, req, res)
    });
    // route for POST comment
    app.post('/api/comment', function(req, res) {
        // sanitize input
        const input = sanitize(req.body);
        var comment = new Comment(input);
        comment.save(function (err, comment) {
            if (err) res.send(err);
            else res.send('comment '+comment.id+ 'created:' + JSON.stringify(input));
        })
    });
};