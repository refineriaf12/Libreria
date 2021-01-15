const {Schema,model} = require(`mongoose`);
const bookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    label_publisher:String,
    img_url:String,
    img_alt:String,
    stock:Number,
    price:String

});

module.exports =model('Book',bookSchema,'books');
    