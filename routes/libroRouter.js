const express = require('express');
const router = express.Router();
const libro = require('../controllers/libroController.js');

router.get('/bookCatalog',libro.list);
router.get('/libroShow/:id',libro.show);
router.post('/createBook', libro.save);
router.post('/editBook/:id', libro.edit);
router.get('/deleteBook/:id', libro.delete);


module.exports = router;