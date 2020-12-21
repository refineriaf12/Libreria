let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const libroSchema = new Schema({
    titulo: String, 
    autor: String,
    stock: Number,
    precio: Number,
    genero: String,
    editorial: String
});

libroSchema.methods.toJSON = function() {   
    let libro = this;
    let libroObject = libro.toObject();
    return libroObject;}

module.exports = mongoose.model('Libro', libroSchema);