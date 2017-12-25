// Model for a comment thread DB entry - compare frontend Class

// load mongoose
var mongoose = require('mongoose');

// define schema
var userSchema = mongoose.Schema({
    date: { // date
        year: { type: Number, required: true },
        week: { type: Number, required: true },
        day: { type: Number, required: true }
    },
    comment: [
        {
            userId: String,
            timeStamp: Number,
            content: String
        }
    ]
});
// export model
module.exports = mongoose.model('Comment', schema);