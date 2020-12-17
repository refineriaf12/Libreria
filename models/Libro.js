let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const libroSchema = new Schema({
    titulo: String, 
    autor: String,
    stock: Number,
    precio: Number
});

libroSchema.set('toJSON', { getters: true, virtuals: false });
module.exports = mongoose.model('Libro', libroSchema);