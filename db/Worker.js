// app/models/Worker.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workerSchema = new Schema({
  name: String,
  company: String
});

module.exports = mongoose.model('Worker', workerSchema);
