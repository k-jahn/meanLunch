// app/routes.js

// load the models
var Meal = require('./models/meal');
var User = require('./models/user');

// expose the routes to our app with module.exports
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/meal', function (req, res) {
        console.log('got req', req.body)
        res.json({text:'nothing here yet'})

        // // use mongoose to get all todos in the database
        // Meal.find(function (err, meals) {

        //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        //     if (err)
        //         res.send(err)

        //     res.json(meals); // return all todos in JSON format
        // });
    });

    // create todo and send back all todos after creation
    app.post('/api/meal', function (req, res) {
        console.log('got req', req.body)
        res.json({text:'hi'})
        // create a meal
        // Meal.create({
        //     date: '', // date
        //     cookId: 1, // id of the cook
        //     mealName: 'req.body.text', // name of the meal 
        //     mealDescription: '', // description of the meal
        //     vegetarian: false,
        //     vegan: false,
        //     dinersMax: 0, //max number of diners
        //     diners: [0], //array of diner IDs
        // }, function (err, meal) {
        //     if (err) res.send(err);

        //     // get and return all the meals after you create another
        //     Meal.find(function (err, meals) {
        //         if (err) res.send(err)
        //             res.json(meals);
        //     });
        // });
    });

    // // delete a todo
    // app.delete('/api/todos/:todo_id', function (req, res) {
    //     Todo.remove({
    //         _id: req.params.todo_id
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todos after you create another
    //         Todo.find(function (err, todos) {
    //             if (err)
    //                 res.send(err)
    //             res.json(todos);
    //         });
    //     });
    // });
};