let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const libroSchema = new Schema({
    titulo:  String, 
    autor: String,
    genero: String,
    sello_editorial: String,
    urlImagen: String,
    descripcion:String,
    stock:   Number,
    precio: Number
});

libroSchema.methods.toJSON = function() {   
    let libro = this;
    let libroObject = libro.toObject();
    return libroObject;
}

module.exports = mongoose.model('Libro', libroSchema);