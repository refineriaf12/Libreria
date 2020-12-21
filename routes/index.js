const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const welcome = require('../data/bienvenidos.json');


router.get(paths.login.url ,function (req,res){

    res.render('loginTemplate',{layout:'loginLayout',usuarioImagen:welcome});


});

router.post(paths.loginform.url,function(req,res){

    res.redirect('/home');
  
  
});

router.get(paths.home.url,function(req,res){

    res.render('homeTemplate',{layout:'inicioLayout'});

});

router.get(paths.edit.url,function(req,res){

    res.render('edicionTemplate',{layout:'edicionLayout'});
  
});

module.exports = router;