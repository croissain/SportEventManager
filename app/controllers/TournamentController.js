const {respone} = require('express');
const TournamentServices = require('../services/TournamentServices');

class TournamentController {
    show = async(req, res, next) => {
        const tournaments = await TournamentServices.findAllTournaments();
        res.render('tournament', { 
            title: 'SEM | Giải đấu',
            tournaments,
        });
    }
}

module.exports = new TournamentController;