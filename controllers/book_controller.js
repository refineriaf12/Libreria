'use strict';

const Book =require(`../models/Book`);

const book_controller ={};

book_controller.list = (req, res) =>{
    Book.find({}).lean().exec((err, books)=>{
        if( err ){ console.log('Error: ', err); return; }

        res.render('templates/catalog_template',{book_list:books,type:true});   
        
    });
    // const books= Book.find({}).lean();
    // res.render('templates/catalog_template', {type:true,book_list:books});
}


module.exports= book_controller;