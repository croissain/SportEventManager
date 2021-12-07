const {respone} = require('express');

class TournamentController {
    show = async(req, res, next) => {
        res.render('tournament');
    }
}

module.exports = new TournamentController;