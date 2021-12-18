const TeamServices = require('../services/TeamServices');
class TeamController {
    show = async (req, res, next) => {
        const teams = await TeamServices.findAllTeams();
        res.render('team', {
            title: 'SEM | Các đội tuyển thi đấu|',
            teams: teams.rows,
        });
    }

    showTeamDetails = async (req, res, next) => {
        const {id}  = req.params;
        const teamdetails = await TeamServices.findTeamById(id);
        const teamleader = await TeamServices.findLeaderById(teamdetails.MaNDK);
        console.log(teamleader);
        const teammembers = await TeamServices.findAllMembers(id);
        
        res.render('team-detail', {
            title: 'SEM | Chi tiết đội tuyển thi đấu|',
            teamdetails,
            teamleader,
            teammembers,
        })
    }
}

module.exports = new TeamController;