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

        res.render('result', {
                title: 'SEM | Kết quả',
                teamArr
            });
    }
}

module.exports = new RecordController;