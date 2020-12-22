const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const libro = require('../controllers/libroController.js');

router.get(paths.bookCatalog.url,libro.list);
router.get('/libroShow/:id',libro.show);
router.post('/createBook', libro.save);
router.get('/deleteBook/:id', libro.delete);


module.exports = router;