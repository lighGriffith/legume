var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, default: "" },
});

module.exports = mongoose.model('user', UserSchema,'user');