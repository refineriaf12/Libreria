const mongoose = require('mongoose');
const Libro = require('../models/Libro');



let libroController = {};

libroController.list = function(req,res){

    Libro.find({}).lean().exec(function(err, libros){
        if( err ){ console.log('Error: ', err); return; }
        res.render('catalogoTemplate',{layout:'catalogoLayout',listaLibros:libros,decision:true});

        
    });


};

module.exports = libroController;