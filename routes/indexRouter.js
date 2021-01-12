const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');
const controller = require('../controllers/generalController');
const welcome = require('../data/bienvenidos.json');


router.get('/' ,(req,res)=>{

    res.render('templates/loginTemplate',{user_img:welcome});


});

router.post("/login_form",user.authentication);

router.get('/new',(req,res)=>{

    res.render('templates/editTemplate');
  
});

router.get('/home',controller.listAll);


router.post('/find',controller.findAll);


module.exports = router;