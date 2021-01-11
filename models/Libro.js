const {Schema, model} = require('mongoose');
const libroSchema = new Schema({
    titulo:  String, 
    autor: String,
    genero: String,
    sello_editorial: String,
    urlImagen: String,
    descripcion:String,
    stock:   Number,
    precio: String
});

module.exports = model('Libro', libroSchema);