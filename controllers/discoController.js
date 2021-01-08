const mongoose = require('mongoose');
const Disco = require('../models/Disco');



let discoController = {};

discoController.list = (req,res)=>{

    Disco.find({}).lean().exec((err, discos)=>{
        if( err ){ console.log('Error: ', err); return; }

        res.render('catalogoTemplate',{listaDiscos:discos,decision:false});
        
        
    });


};

discoController.show = (req,res)=>{

    Disco.findOne({_id: req.params.id}).lean().exec((err, disco)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('edicionTemplate', {discoReq:disco} );
    });


};

discoController.save = (req, res)=>{
    let disco = new Disco( req.body );
    
    disco.save((err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Disco guardado con exito");
        res.redirect("/discoShow/"+disco._id);
        
    });
};

discoController.delete = (req, res)=>{
    
    Disco.deleteOne({_id: req.params.id}, (err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Disco eliminado!");
        res.redirect('/discCatalog');
    });
    
};




module.exports = discoController;