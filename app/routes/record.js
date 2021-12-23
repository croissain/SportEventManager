const express = require('express');
const router = express.Router();
const RecordController = require('../controllers/RecordController');

router.get('/', RecordController.showRecord);
router.post('/:id/', RecordController.updateRecord);
router.get('/:id/edit', RecordController.editRecord);


module.exports = router;