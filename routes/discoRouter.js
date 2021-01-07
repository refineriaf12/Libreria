const express = require('express');
const router = express.Router();
const disco = require('../controllers/discoController.js');

router.get('/discCatalog',disco.list);
router.get('/discoShow/:id',disco.show);
router.post('/createDisc', disco.save);
router.get('/deleteDisc/:id', disco.delete);

module.exports = router;