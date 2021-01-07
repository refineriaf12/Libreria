let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const discoSchema = new Schema({
    titulo:  String, 
    autor: String,
    genero: String,
    sello_editorial: String,
    urlImagen: String,
    descripcion:String,
    stock:   Number,
    precio: Number  
    
});

module.exports = mongoose.model('Disco', discoSchema);