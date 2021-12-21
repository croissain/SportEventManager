const express = require('express');
const router = express.Router();
const recordController = require('../controllers/RecordController');

router.get('/', recordController.showRecord);


module.exports = router;