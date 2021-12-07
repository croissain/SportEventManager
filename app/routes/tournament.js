const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/TournamentController');

router.get('/', tournamentController.show);

module.exports = router;