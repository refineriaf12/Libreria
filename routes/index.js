const express = require('express');
const router = express.Router();
const welcome = require('../data/bienvenidos.json');


router.get('/' ,(req,res)=>{

    res.render('loginTemplate',{usuarioImagen:welcome});


});

router.post("/formularioLogin",(req,res)=>{

    res.redirect('/home');
  
  
});

router.get('/home',(req,res)=>{

    res.render('homeTemplate');

});

router.get('/edit',(req,res)=>{

    res.render('edicionTemplate');
  
});

module.exports = router;