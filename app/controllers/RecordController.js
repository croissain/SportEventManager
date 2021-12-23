
const { models } = require('../models');

const ResultServices = require('../services/ResultServices');
const TeamServices = require('../services/TeamServices');
const MatchServices = require('../services/MatchServices');
class RecordController {
    showRecord = async (req, res, next) => {
        const match = await ResultServices.findAllMatch();

        let teamArr = {};

        for (let i = 0; i < match.length; i++) {
            let team1 = await TeamServices.findTeamById(match[i].MaDB1);
            let team2 = await TeamServices.findTeamById(match[i].MaDB2);
            teamArr[i] = {
                team1: team1,
                team2: team2,
                match: match[i]
            }
        }
        console.log(teamArr);

        res.render('score', {
                title: 'SEM | Kết quả',
                teamArr,
            });
    }

    editRecord= async (req, res, next) => {
        const match = await MatchServices.findMatchById(req.params.id);
        res.render('score-edit', {
            match,
            });
    }

    updateRecord = async (req, res, next) => {
        await models.TranDau.update(req.body, {
            where: {
                MaTD: req.params.id,
            }
        })
        res.redirect('/record')
    }
}

module.exports = new RecordController;