const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const welcome = require('../data/bienvenidos.json');


router.get(paths.login.url ,function (req,res){

    res.render('loginTemplate',{layout:'loginLayout',usuarioImagen:welcome});


});

router.post('/formularioLogin',function(req,res){

    res.redirect('/home');
  
  
})

module.exports = router;