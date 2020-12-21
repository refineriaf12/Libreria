const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const libro = require('../controllers/libroController.js');

router.get(paths.bookCatalog.url,libro.list);
router.get('/libroShow/:id',libro.show);

module.exports = router;