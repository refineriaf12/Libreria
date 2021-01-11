const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const libro = require('../controllers/libroController');
const welcome = require('../data/bienvenidos.json');


router.get('/' ,(req,res)=>{

    res.render('templates/loginTemplate',{usuarioImagen:welcome});


});

router.post("/formularioLogin",user.authentication);

router.get('/new',(req,res)=>{

    res.render('templates/edicionTemplate');
  
});

router.get('/home',libro.listAll);

module.exports = router;