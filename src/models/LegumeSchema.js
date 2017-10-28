var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var LegumeSchema = new Schema({
    name: { type: String, default: "" },
});

module.exports = mongoose.model('legume', LegumeSchema,'legume');