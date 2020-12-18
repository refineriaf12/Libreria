let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const discoSchema = new Schema({
    titulo:  String, 
    autor: String,
    stock:   Number,
    precio: Number,
    
});
discoSchema.methods.toJSON = function() {   
    let disco = this;
    let discoObject = disco.toObject();
    return discoObject;
}
module.exports = mongoose.model('Disco', discoSchema);