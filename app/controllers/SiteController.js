const SiteServices = require('../services/SiteServices');
const TeamServices = require('../services/TeamServices');
class SiteController {
    home = async(req, res, next) => {
        res.render('home');
    }

    showRule = async(req, res, next) => {
        res.render('rule');
    }

    showAbout = async(req, res, next) => {
        res.render('about');
    }

    showResult = async(req, res, next) => {

        const match = await SiteServices.findAllMatch();
        console.log(match)

        // let team1;
        // let team2;

        // match.forEach(match => {
        //     team1 = await TeamServices.findTeamById(match.MaDB1);
        //     team2 = await TeamServices.findTeamById(match.MaDB2);
        // });

        res.render('result', { 
            title: 'SEM | Kết quả',
            //match,
        });
    }

    showSchedule = async(req, res, next) => {
        res.render('schedule');
    }
}

module.exports = new SiteController;