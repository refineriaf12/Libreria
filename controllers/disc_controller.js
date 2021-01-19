'use strict';

const Disc =require(`../models/Disc`);

const disc_controller ={};

disc_controller.list = async (req, res) =>{
    const discs= await Disc.find({}).lean();
    res.render('templates/catalog_template', {type:false,disc_list:discs});
}

disc_controller.show = async (req, res) => {
    const disc = await Disc.findById({_id: req.params.id}).lean();
    res.render('templates/detail_template',{disc:disc});
}

module.exports= disc_controller;