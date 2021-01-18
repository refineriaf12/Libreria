'use strict';

const Disc =require(`../models/Disc`);

const disc_controller ={};

// book_controller.list = (req, res) =>{
//     Book.find({}).lean().exec((err, books)=>{
//         if( err ){ console.log('Error: ', err); return; }

//         res.render('templates/catalog_template',{book_list:books,type:true});   
        
//     });
// }

disc_controller.list = async (req, res) =>{
    const discs= await Disc.find({}).lean();
    res.render('templates/catalog_template', {type:false,disc_list:discs});
}

disc_controller.show = (req, res) => {
    const disc = Disc.findOne({_id:req.params.id}).lean();
    res.render('templates/disc_template',{detalle:disc,detalle:true});
}

module.exports= disc_controller;