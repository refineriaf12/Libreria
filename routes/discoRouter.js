const express = require('express');
const router = express.Router();
const paths = require('../data/Paths.json');
const disco = require('../controllers/discoController.js');

router.get(paths.discCatalog.url,disco.list);

module.exports = router;