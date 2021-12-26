const SiteServices = require('../services/SiteServices');
const TeamServices = require('../services/TeamServices');
const MatchServices = require('../services/MatchServices');
class SiteController {
    home = async (req, res, next) => {
        try{
            const match = await MatchServices.findAllMatch();
            let teamArr = {};

            for (let i = 0; i < match.length; i++) {
                let team1 = await TeamServices.findTeamById(match[i].MaDB1);
                let team2 = await TeamServices.findTeamById(match[i].MaDB2);
                let location = await SiteServices.findLocation(match[i].MaSD);

                teamArr[i] = {
                    team1: team1,
                    team2: team2,
                    match: match[i],
                    location: location.DiaChi,
                }
            }

            const topTeams = await TeamServices.findTopTeams();

            const topWin = await TeamServices.findWin();
            let topPlayers = {};

            for(let i = 0; i < topWin.length; i++) {
                let player = await TeamServices.findMember(topWin[i].MaDB);
                topPlayers[i] = {
                    // team: topTeams[i],
                    player: player,
                }
            }


            res.render('home', {
                title: 'SEM | Trang chủ',
                match,
                teamArr,
                topTeams,
                topPlayers,
            });
        }
        catch (e){
            res.render('home', {
                title: 'SEM | Trang chủ',
            });
        }
    }

    showRule = async (req, res, next) => {
        res.render('rule');
    }

    showAbout = async (req, res, next) => {
        res.render('about');
    }
}

module.exports = new SiteController;