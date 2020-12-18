const mongoose = require('mongoose');
const Disco = require('../models/Disco');


let discoController = {};

discoController.list = function(req,res){

    Disco.find({}).lean().exec(function(err, discos){
        if( err ){ console.log('Error: ', err); return; }
        res.render('catalogoTemplate',{layout:'catalogoLayout',listaDiscos:discos});

        
        
    });


};

discoController.show = function(req, res){
    Libro.findOne({_id: req.params.id}).exec(function(err, product){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/product/show', {product: product} );
    });
    
};

module.exports = discoController;