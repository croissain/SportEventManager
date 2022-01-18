const { respone } = require('express');
const TournamentServices = require('../services/TournamentServices');
const TeamServices = require('../services/TeamServices');
class TournamentController {
    show = async (req, res, next) => {
        const tournaments = await TournamentServices.findAllTournaments();
        let tournamentDetails = [];

        for (let i = 0; i < tournaments.length; i++) {
            let totalTeams = await TeamServices.countTotalTeamsInATournament(tournaments[i].MaGD);
            tournamentDetails.push({
                tournament: tournaments[i],
                totalTeams: totalTeams
            });
        }

        console.log(tournamentDetails);

        res.render('tournament', {
            title: 'SEM | Giải đấu',
            tournamentDetails,
        });
    }

    list = async (req, res, next) => {
        const { tournamentid } = req.params;
        const tournament = await TournamentServices.findTournamentNameById(tournamentid);
        const teams = await TeamServices.findAllTeamsByTournamentId(tournamentid);
        console.log(tournamentid, teams)

        res.render('team/team', {
            title: 'SEM | Các đội tuyển thi đấu|',
            tournament,
            teams
        });
    }

    search = async (req, res, next) => {
        const { term } = req.body;
        const tournaments = await TournamentServices.findTournamentsByName(term);
        let tournamentDetails = [];

        for (let i = 0; i < tournaments.length; i++) {
            let totalTeams = await TeamServices.countTotalTeamsInATournament(tournaments[i].MaGD);
            tournamentDetails.push({
                tournament: tournaments[i],
                totalTeams: totalTeams
            });
        }

        res.render('tournament', {
            title: 'SEM | Giải đấu',
            tournamentDetails,
        });
    }
}

module.exports = new TournamentController;