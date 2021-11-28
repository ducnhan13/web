const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/404', HomeController.showPageError);
router.get('/', HomeController.getAll);

module.exports = router;