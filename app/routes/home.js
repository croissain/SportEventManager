const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

router.get('/', siteController.home);

router.get('rule', siteController.showRule);

module.exports = router;