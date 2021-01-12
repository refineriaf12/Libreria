const {Schema, model} = require('mongoose');
const discoSchema = new Schema({
    titulo:  String, 
    autor: String,
    genero: String,
    sello_editorial: String,
    urlImagen: String,
    descripcion:String,
    stock:   Number,
    precio: String  
    
});

discoSchema.index({titulo:"text"});

module.exports = model('Disco', discoSchema);