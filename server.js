const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
require('./connection');

app.engine('hbs',exphbs({

    layoutsDir:  __dirname +'/views/layouts',
    partialsDir:  __dirname +'/views/partials',
    extname: 'hbs'

}));

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index'));
app.use(require('./routes/libroRouter'));
app.use(require('./routes/discoRouter'));
app.listen(3000);
