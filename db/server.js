// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');

//Allow all inc requeests

app.use(cors())

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Innsjekkid'); // connect to our database


var workerRoute = require('./testroutes');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', workerRoute);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
