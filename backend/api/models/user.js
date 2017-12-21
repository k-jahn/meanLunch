// Model for a user DB entry compare frontend Class

// load mongoose
var mongoose = require('mongoose');

// define schema
var userSchema = mongoose.Schema({
    name: { type:String, required: true },
    color: String,
    veganity: Number, 
});

// export model
module.exports = mongoose.model('User', userSchema);