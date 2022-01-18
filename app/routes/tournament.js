const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/TournamentController');

router.post('/', tournamentController.search);
router.get('/', tournamentController.show);
router.get('/:tournamentid', tournamentController.list);

module.exports = router;