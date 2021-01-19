const express = require (`express`);
const hbs = require (`express-handlebars`);
const app = express();
const mongoose = require (`mongoose`);

const book_controller =require('./controllers/book_controller');
const disc_controller =require('./controllers/disc_controller')

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
app.get("/catalog_disc",disc_controller.list);

app.get("/book_detail/:id",book_controller.show);
app.get("/disc_detail/:id",disc_controller.show);


app.set("view engine","hbs");
app.use(express.static("public"));

app.listen(3000); 
