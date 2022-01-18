const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');

router.get('/:id', TeamController.showTeamDetails);
router.post('/:id', TeamController.searchMembers);

router.get('/', TeamController.show);
router.post('/', TeamController.search);

module.exports = router;