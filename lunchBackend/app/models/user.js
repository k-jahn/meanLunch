// app/models/day.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    id: Number, // UserId, assigned by backend
    name: String, // Username
    vegetarian: Boolean,
    vegan: Boolean,
    emailMd5: String, // md5 hash of email address for Gravatar
});