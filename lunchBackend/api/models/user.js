// Model for a user DB entry

// load mongoose
var mongoose = require('mongoose');

// define schema
var userSchema = mongoose.Schema({
    name: { type:String, required: true },
    vegetarian: Boolean,
    vegan: Boolean, 
});

// export model
module.exports = mongoose.model('User', userSchema);