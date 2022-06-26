var mongoose = require('mongoose');
// Schema
var citySchema = mongoose.Schema({
    lon: Number,
    lat: Number,
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
})

var cityModel = mongoose.model('cities', citySchema)
// Exportation
module.exports = cityModel;