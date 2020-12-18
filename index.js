const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const libroRouter = require('./routes/libroRouter');
const discoRouter = require('./routes/discoRouter');
const index = require('./routes/index');





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


app.get('/home', function(req,res){

  res.render('homeTemplate',{layout:'inicioLayout'});

})

app.use(libroRouter);
app.use(discoRouter);
app.use(index);
app.use(express.static('public'));
app.listen(3000);
