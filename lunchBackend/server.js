// server.js entrypoint for node server

// dependencies =================================================
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');


// connect database ========================================================
var dbUrl = "mongodb://localhost:27017/lunch"
var db = mongoose.connection;

db.on('error', (e) => console.log('mongoose-mongodb connection error', e));
db.once('open', () => console.log('mongoose-mongodb connected at ' + dbUrl));

mongoose.connect(dbUrl); 

// load and configure express app
var app = express();

app.use(cors());
app.use(morgan('dev'))


// load routes ===============================================

require('./api/routes')(app)


// start app
var port = 8888;
app.listen(port)
console.log('App listening on port ' + port);