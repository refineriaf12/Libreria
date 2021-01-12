const mongoose = require('mongoose');
const Libro = require('../models/Libro');
const Disco = require('../models/Disco');

let generalController = {};

generalController.listAll = async (req,res)=>{

    const libros =await Libro.find({}).lean();
    const discos =await Disco.find({}).lean();

    res.render('templates/homeTemplate',{listaLibros:libros,listaDiscos:discos});

};

generalController.findAll = async (req,res)=>{

    // const libros = await Libro.find({$text: {$search: req.body.gsearch, $caseSensitive: false}}).lean();
    // const discos = await Disco.find({$text: {$search: req.body.gsearch, $caseSensitive: false}}).lean();

    const libros = await Libro.find({titulo:req.body.gsearch}).lean();
    const discos = await Disco.find({titulo:req.body.gsearch}).lean();

    res.render('templates/homeTemplate',{listaLibros:libros,listaDiscos:discos});

};

module.exports = generalController;