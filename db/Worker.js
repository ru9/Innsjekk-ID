// app/models/Worker.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workerSchema = new Schema({
  name: String,
<<<<<<< HEAD
  company: String
=======
  company: String,
  cardid: Number
>>>>>>> parent of 2d58adf... Show ID on cardswipe
});

module.exports = mongoose.model('Worker', workerSchema);
