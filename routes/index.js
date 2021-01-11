const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const welcome = require('../data/bienvenidos.json');


router.get('/' ,(req,res)=>{

    res.render('templates/loginTemplate',{usuarioImagen:welcome});


});

router.post("/formularioLogin",user.authentication);

router.get('/new',(req,res)=>{

    res.render('templates/edicionTemplate');
  
});

module.exports = router;