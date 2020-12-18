const mongoose = require('mongoose');
const Disco = require('../models/Disco');


let discoController = {};

discoController.list = function(req,res){

    Disco.find({}).lean().exec(function(err, discos){
        if( err ){ console.log('Error: ', err); return; }
        res.render('catalogoTemplate',{layout:'catalogoLayout',listaDiscos:discos,decision:false});

        
        
    });


};




module.exports = discoController;