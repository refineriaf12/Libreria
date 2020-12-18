const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const Libro = require('./models/Libro');
const Disco = require('./models/Disco');
const libroController = require('./controllers/libroController.js');
const discoController = require('./controllers/discoController.js');




mongoose.connect('mongodb://localhost/Libreria', {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado");
});


const paths = require('./data/Paths.json');


app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    extname: 'hbs',
    partialsDir:  __dirname +'/views/partials'

}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get(paths.login.url,libroController.list);
app.get(paths.login.url,discoController.list);



app.get(paths.edit.url, function(req,res){

    res.render('edicionTemplate',{layout:'edicionLayout'});
    
});

app.use(express.static('public'));
app.listen(3000);











