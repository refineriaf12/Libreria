const mongoose = require('mongoose');
const Libro = require('../models/Libro');



let libroController = {};

libroController.list = function(req,res){

    Libro.find({}).lean().exec(function(err, libros){
        if( err ){ console.log('Error: ', err); return; }
        res.render('catalogoTemplate',{layout:'catalogoLayout',listaLibros:libros,decision:true});

        
    });


};

libroController.show = function(req,res){

    Libro.findOne({_id: req.params.id}).lean().exec(function(err, libro){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('edicionTemplate', {layout:'edicionLayout',libroReq:libro} );
    });


};

libroController.save = function(req, res){
    let libro = new Libro( req.body );
    
    libro.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Libro guardado con exito");
        res.redirect("/libroShow/"+libro._id);
        
    });
};

module.exports = libroController;