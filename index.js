const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const paths = require('./data/Paths.json');
const welcome = require('./data/bienvenidos.json');
const libroController = require('./controllers/libroController.js');
const discoController = require('./controllers/discoController.js');




mongoose.connect('mongodb://localhost/Libreria', {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado");
});


app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    extname: 'hbs',
    partialsDir:  __dirname +'/views/partials'

}));

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get(paths.login.url, function(req,res){

  res.render('loginTemplate',{layout:'loginLayout',usuarioImagen:welcome});
  
});

app.post('/formularioLogin',function(req,res){

  res.redirect('/home');


})

app.get('/home', function(req,res){

  res.render('homeTemplate',{layout:'homeLayout'});

})
 
app.get(paths.bookCatalog.url,libroController.list);
app.get(paths.discCatalog.url,discoController.list);


app.use(express.static('public'));
app.listen(3000);
