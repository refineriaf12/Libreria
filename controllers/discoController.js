const mongoose = require('mongoose');
const Disco = require('../models/Disco');



let discoController = {};

discoController.list = (req,res)=>{

    Disco.find({}).lean().exec((err, discos)=>{
        if( err ){ console.log('Error: ', err); return; }

        res.render('templates/catalogoTemplate',{listaDiscos:discos,decision:false});   
        
    });

};

discoController.show = (req,res)=>{

    Disco.findOne({_id: req.params.id}).lean().exec((err, disco)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('templates/edicionTemplate', {discoReq:disco} );
    });

};

discoController.edit = async (req,res)=>{

    const filter = { _id: req.params.id};
    const update = { titulo: req.body.titulo , autor:req.body.autor, genero:req.body.genero,
         sello_editorial:req.body.sello_editorial, urlImagen:req.body.urlImagen,descripcion:req.body.descripcion,
        stock:req.body.stock,precio:req.body.precio};

    await Disco.findOneAndUpdate(filter,update);
    res.redirect('/discCatalog');

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