'use strict';


const Book =require(`../models/Book`);

const book_controller ={};

// book_controller.list = (req, res) =>{
//     Book.find({}).lean().exec((err, books)=>{
//         if( err ){ console.log('Error: ', err); return; }

//         res.render('templates/catalog_template',{book_list:books,type:true});   
        
//     });
// }
// book_controller.show = (req, res) =>{
//     Book.findOne({_id: req.params.id}).lean().exec((err, book)=>{
//         if( err ){ console.log('Error: ', err); return; }

//         res.render('templates/book_template',{detalle:book,detalle:true});   
        
//     });
// }

book_controller.list = async (req, res) =>{
    const books= await Book.find({}).lean();
    res.render('templates/catalog_template', {type:true,book_list:books});
}

book_controller.show = (req, res) => {
    const book = Book.findById({_id: req.params.id}).lean();
    res.render('templates/book_template',{detalle:book,detalle:true});
}

module.exports= book_controller;