const TeamServices = require('../services/TeamServices');
const PlayerService = require('../services/PlayerService');
class TeamController {
    show = async (req, res, next) => {
        const teams = await TeamServices.findAllTeams();
        for (let i = 0; i < teams.count; i++) {
            let playersNum = await PlayerService.sumMembers(teams.rows[i].MaDB);
            await TeamServices.updateMembersNum(teams.rows[i].MaDB, playersNum);
        }
        res.render('team/team', {
            title: 'SEM | Các đội tuyển thi đấu|',
            teams: teams.rows,
        });
    }

    showTeamDetails = async (req, res, next) => {
        const { id } = req.params;
        const teamdetails = await TeamServices.findTeamById(id);
        const teamleader = await TeamServices.findLeaderById(teamdetails.MaNDK);
        const teammembers = await TeamServices.findAllMembers(id);

        res.render('team/team-detail', {
            title: 'SEM | Chi tiết đội tuyển thi đấu|',
            teamdetails,
            teamleader,
            teammembers,
        })
    }

    search = async (req, res, next) => {
        const { term } = req.body;
        const teams = await TeamServices.findTeamsByName(term);
        res.render('team/team', {
            title: 'SEM | Các đội tuyển thi đấu|',
            teams,
        });
    }

    searchMembers = async (req, res, next) => {
        const { id } = req.params;
        const { term } = req.body;
        const teamdetails = await TeamServices.findTeamById(id);
        const teamleader = await TeamServices.findLeaderById(teamdetails.MaNDK);
        const teammembers = await TeamServices.findMembersByName(id, term);
        res.render('team/team-detail', {
            title: 'SEM | Chi tiết đội tuyển thi đấu|',
            teamdetails,
            teamleader,
            teammembers,
        });
    }
}

module.exports = new TeamController;