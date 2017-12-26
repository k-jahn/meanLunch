// server.js entrypoint for node server

// dependencies ==========================================================
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var morgan = require('morgan');
var https = require('https');

// connect database ========================================================
var dbUrl = "mongodb://localhost:27017/lunch"
var db = mongoose.connection;

db.on('error', (e) => console.log('mongoose-mongodb connection error', e));
db.once('open', () => console.log('mongoose-mongodb connected at ' + dbUrl));

mongoose.connect(dbUrl); 

// load and configure express app
var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// load routes =============================================================
require('./api/routes')(app);


// // start http server
// var httpPort = 8888;
// app.listen(httpPort)
// console.log('App listening for http on port ' + httpPort);

// start https server
var privateKey = fs.readFileSync('./ssl/server.key', 'utf8');
var certificate = fs.readFileSync('./ssl/server.crt', 'utf8');
var pass = require('./ssl/passphrase').module;
var credentials = {
    key: privateKey, 
    cert: certificate,
    passphrase: pass
};
var httpsPort = 8443;
https.createServer(credentials, app).listen(httpsPort);
console.log('App listening for https on port ' + httpsPort);