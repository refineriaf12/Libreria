const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const disco = require('../controllers/discoController.js');

router.get(paths.discCatalog.url,disco.list);
router.get('/discoShow/:id',disco.show);
router.post('/createDisc', function(req,res){

    console.log('disco guardao')


});

module.exports = router;