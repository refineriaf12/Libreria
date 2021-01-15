const express = require (`express`);
const hbs = require (`express-handlebars`);
const app = express();
const mongoose = require (`mongoose`);

const book_controller =require('./controllers/book_controller');

mongoose.connect('mongodb://localhost/Libreria', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false, useCreateIndex:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado");
});


app.engine("hbs",hbs({
    partialsDir:__dirname+"/views/partials",
    layoutsDir: __dirname+"/views/layouts" ,
    extname:"hbs"

}));
app.get("/",(req,res)=>{
    res.render("templates/login_template");
});
app.get("/home",(req,res)=>{
   res.render("templates/home_template");
});
app.get("/new",(req,res)=>{
    res.render("templates/edit_template")
});
app.get("/catalog_book", book_controller.list);

app.get("/catalog_disc",(req,res)=>{
    res.render("templates/catalog_template")
});

app.set("view engine","hbs");
app.use(express.static("public"));
app.listen(5000); 
