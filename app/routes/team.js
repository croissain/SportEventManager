const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');

router.get('/:id', TeamController.showTeamDetails);
router.get('/', TeamController.show);

module.exports = router;