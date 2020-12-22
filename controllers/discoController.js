const mongoose = require('mongoose');
const Disco = require('../models/Disco');


let discoController = {};

discoController.list = function(req,res){

    Disco.find({}).lean().exec(function(err, discos){
        if( err ){ console.log('Error: ', err); return; }

        res.render('catalogoTemplate',{layout:'catalogoLayout',listaDiscos:discos,decision:false});
        
        
    });


};

discoController.show = function(req,res){

    Disco.findOne({_id: req.params.id}).lean().exec(function(err, disco){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('edicionTemplate', {layout:'edicionLayout', discoReq:disco} );
    });


};

discoController.save = function(req, res){
    let disco = new Disco( req.body );
    
    disco.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Disco guardado con exito");
        res.redirect("/discoShow/"+disco._id);
        
    });
};




module.exports = discoController;