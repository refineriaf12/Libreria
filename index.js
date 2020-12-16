const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const discos = require('./data/Discos.json');
const libros = require('./data/Libros.json');
const paths = require('./data/Paths.json');


app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    extname: 'hbs',
    partialsDir:  __dirname +'/views/partials'

}));

app.set('view engine', 'hbs');
 
app.get(paths.catalog.url, function (req, res) {
    
    res.render('catalogoTemplate',{layout:'catalogoLayout',listaDiscos:discos,listaLibros:libros});

});

app.get(paths.edit.url, function(req,res){

    res.render('edicionTemplate',{layout:'edicionLayout'});
    
});
//cargar el login template
app.get(paths.login.url, function(req,res){

    res.render('loginTemplate',{layout:'loginLayout'});
    
});


app.use(express.static('public'));
app.listen(3000);











