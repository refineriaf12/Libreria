let mongoose = require('mongoose');
const { Schema } = mongoose;

const discoSchema = new Schema({
    titulo:  String, 
    autor: String,
    stock:   Number,
    precio: Number
});

module.exports = mongoose.model('Disco', discoSchema);