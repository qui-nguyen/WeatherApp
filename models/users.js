var mongoose = require('mongoose');
// Schema
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

var userModel = mongoose.model('users', userSchema)
// Exportation
module.exports = userModel;