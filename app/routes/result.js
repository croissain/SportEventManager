const express = require('express');
const router = express.Router();
const resultController = require('../controllers/ResultController');

router.get('/', resultController.showResult);


module.exports = router;