const Libro = require('./models/Libro');


let libroController = {};

libroController.list = function(req, res){
    
    Libro.find({}).exec(function(err, libros){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('catalogoTemplate', {listaLibros: libros} );
        
    });
    
};