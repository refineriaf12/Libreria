let mongoose = require('mongoose');
const { Schema } = mongoose;

const libroSchema = new Schema({
    titulo:  String, 
    autor: String,
    stock:   Number,
    precio: Number
});

module.exports = mongoose.model('Libro', libroSchema);