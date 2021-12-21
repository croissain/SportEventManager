// require("date-format-lite");
// const {models} = require('../models');

// class ScheduleController {
//     constructor(connection, table) {
//         this._db = connection;
//         this.table = models.LichThiDau;
//     }

//     async getAll(params) {
//         let query = "SELECT * FROM ??";
//         let queryParams = [
//             this.table
//         ];

//         let result = await this._db.query(query, queryParams);

//         result.forEach((entry) => {
//             entry.NgayBD = entry.NgayBD.format("DD/MM/YYYY hh:mm");
//             entry.NgayKT = entry.NgayKT.format("DD/MM/YYYY hh:mm");
//         });
//         return result;
//     }

//     async insert(data) {
//         let result = await this._db.query("INSERT INTO ?? (`NgayBD`, `NgayKT`, `NoiDung`) VALUE (?,?,?)", [this.table, data.NgayBD, data.NgayKT, data.NoiDung]);

//         return {
//             action: "inserted",
//             tid: result.insertID
//         }
//     }

//     async update(id, data) {
//         await this._db.query("UPDATE ?? SET `NgayBD` = ?, `NgayKT` = ?, `NoiDung` = ? WHERE `SoTT` = ?", [this.table, data.NgayBD, data.NgayKT, data.NoiDung, id]);
//     }

//     async delete(id) {
//         await this._db.query("DELETE FROM ?? WHERE `SoTT` = ?", [this.table, id]);

//         return {
//             action: "deleted",
//         }
//     }
// }

// module.exports = new ScheduleController;

// const { match } = require('sequelize/types/lib/operators');
const ResultServices = require('../services/ResultServices');
const TeamServices = require('../services/TeamServices');
const MatchServices = require('../services/MatchServices');

const location = 'SD01';
class ScheduleController {
    showSchedule = async (req, res, next) => {
        let matches = await ResultServices.findAllMatch();

        res.render('schedule/schedule', {
            matches
        });
    }

    scheduleGenerate = async (req, res, next) => {
        const teams = await TeamServices.findAllTeams();
        // console.log(teams.rows);

        if (teams.count % 2 === 0) {
            let splitAt = function (i, xs) {
                let a = xs.slice(0, i);
                let b = xs.slice(i, xs.length);
                return [a, b];
            };

            let shuffle = function (xs) {
                return xs.slice(0).sort(function () {
                    return 0.5 - Math.random();
                });
            };

            let zip = function (xs) {
                return xs[0].map(function (_, i) {
                    return xs.map(function (x) { return x[i]; })
                });
            };

            let result = zip(splitAt(teams.rows.length / 2, shuffle(teams.rows)));

            let count = 0;
            let currDate = new Date();

            result.forEach(async (match) => {
                try {
                    let team1_id = match[0].MaDB;
                    let team2_id = match[1].MaDB;

                    // let match_id_count = parseInt(lastestMatch.slice(2)) + 1;
                    count++;
                    let match_id = "TD" + count;

                    let start_time = "7:45 AM";
                    currDate.setDate(currDate.getDate() + 1);
                    let month = currDate.getUTCMonth() + 1;
                    let day = currDate.getUTCDate();
                    let year = currDate.getUTCFullYear();

                    let start_date = year + "-" + month + "-" + day;
                    console.log(match_id, team1_id, team2_id, start_time, start_date);

                    await MatchServices.createMatch(match_id, team1_id, team2_id, location, start_time, start_date);
                } catch (err) { console.log(err) }
            })
        }
        else if (teams.count % 2 !== 0) {
            let pairs = function (arr) {
                let res = [];
                let l = arr.length;
                for (let i = 0; i < l; ++i)
                    for (let j = i + 1; j < l; ++j)
                        res.push([arr[i], arr[j]]);
                return res;
            }

            let result = pairs(teams.rows);

            let count = 0;
            let currDate = new Date();

            result.forEach(async (match) => {
                try {
                    let team1_id = match[0].MaDB;
                    let team2_id = match[1].MaDB;

                    // let match_id_count = parseInt(lastestMatch.slice(2)) + 1;
                    count++;
                    let match_id = "TD" + count;

                    let start_time = "7:45 AM";
                    currDate.setDate(currDate.getDate() + 1);
                    let month = currDate.getUTCMonth() + 1;
                    let day = currDate.getUTCDate();
                    let year = currDate.getUTCFullYear();

                    let start_date = year + "-" + month + "-" + day;
                    console.log(match_id, team1_id, team2_id, start_time, start_date);

                    await MatchServices.createMatch(match_id, team1_id, team2_id, location, start_time, start_date);
                } catch (err) { console.log(err) }
            })
        }

        let matches = await ResultServices.findAllMatch();

        res.redirect('back');
    }

    scheduleEdit = async (req, res, next) => {
        let match_id = req.params.id;
        let match = await ResultServices.findMatchById(match_id);

        let teams = await TeamServices.findAllTeams();

        res.render('schedule/schedule-edit', {
            match,
            teams
        });
    }
}

module.exports = new ScheduleController;