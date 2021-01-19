const {Schema, model} = require('mongoose');
const discSchema = new Schema({
    title:  String, 
    author: String,
    genre: String,
    label_publisher: String,
    img_url: String,
    img_alt:String,
    stock:   Number,
    price: String,
    availability:String  
    
});

discSchema.index({title:"text"});

module.exports = model('Disc', discSchema);