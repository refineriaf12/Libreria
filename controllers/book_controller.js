'use strict';


const Book =require(`../models/Book`);

const book_controller ={};

book_controller.list = async (req, res) =>{
    const books= await Book.find({}).lean();
    res.render('templates/catalog_template', {type:true,book_list:books});
}

book_controller.show = async (req, res) => {
    const book = await Book.findById({_id: req.params.id}).lean();
    res.render('templates/detail_template',{book:book});
}

module.exports= book_controller;