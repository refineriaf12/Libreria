const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const libroRouter = require('./routes/libroRouter');
const discoRouter = require('./routes/discoRouter');
const index = require('./routes/index');
require('./connection');


app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    extname: 'hbs',
    partialsDir:  __dirname +'/views/partials'

}));

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(index);
app.use(libroRouter);
app.use(discoRouter);
app.use(express.static('public'));
app.listen(3000);
