const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const Libro = require('./models/Libro');
const Disco = require('./models/Disco');



mongoose.connect('mongodb://localhost/Libreria', {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado");
});


const discos = require('./data/Discos.json');
const libros = require('./data/Libros.json');
const paths = require('./data/Paths.json');


app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    extname: 'hbs',
    partialsDir:  __dirname +'/views/partials'

}));

app.set('view engine', 'hbs');
 
app.get(paths.login.url, function (req, res) {
    
    Libro.find({}).exec(function(err, libros){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        
        
    });

    Disco.find({}).exec(function(err, discos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        
        
    });

    res.render('catalogoTemplate', {layout:'catalogoLayout',listaLibros:libros,listaDiscos: discos} );
});

app.get(paths.edit.url, function(req,res){

    res.render('edicionTemplate',{layout:'edicionLayout'});
    
});


app.use(express.static('public'));
app.listen(3000);











