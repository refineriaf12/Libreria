const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const libro = require('../controllers/libroController.js');

router.get(paths.bookCatalog.url,libro.list);

module.exports = router;