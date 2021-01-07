const mongoose = require('mongoose');
const Libro = require('../models/Libro');



let libroController = {};

libroController.list = (req,res)=>{

    Libro.find({}).lean().exec((err, libros)=>{
        if( err ){ console.log('Error: ', err); return; }
        res.render('catalogoTemplate',{listaLibros:libros,decision:true});

        
    });


};

libroController.show = (req,res)=>{

    Libro.findOne({_id: req.params.id}).lean().exec((err, libro)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('edicionTemplate', {libroReq:libro} );
    });


};

libroController.save = (req, res)=>{
    let libro = new Libro( req.body );
    
    libro.save((err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Libro guardado con exito");
        res.redirect("/libroShow/"+libro._id);
        
    });
};

libroController.delete = (req, res)=>{
    
    Libro.deleteOne({_id: req.params.id}, (err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Libro eliminado!");
        res.redirect('/bookCatalog');
    });
    
};


module.exports = libroController;