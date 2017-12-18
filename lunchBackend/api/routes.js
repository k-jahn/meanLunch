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
        Meal.create({
            date: req.date, // date
            cookId: 1, // id of the cook
            mealName: 'testing', // name of the meal 
            mealDescription: '', // description of the meal
            vegetarian: false,
            vegan: false,
            dinersMax: 0, //max number of diners
            diners: [0], //array of diner IDs
        }, function (err, meal) {
            if (err) res.send(err);
            res.send('meal created')
        });
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