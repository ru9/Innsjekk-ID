// app/models/Worker.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var docSchema = new Schema({
  name: String,
  filelocation: String
});

module.exports = mongoose.model('Doc', docSchema);
