let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const discoSchema = new Schema({
    titulo:  String, 
    autor: String,
    stock:   Number,
    precio: Number,
    
});
discoSchema.set('toJSON', { getters: true, virtuals: false });
module.exports = mongoose.model('Disco', discoSchema);