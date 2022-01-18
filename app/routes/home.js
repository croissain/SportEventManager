const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

router.get('/rule', siteController.showRule);
router.get('/about', siteController.showAbout);
router.get('/', siteController.home);

module.exports = router;