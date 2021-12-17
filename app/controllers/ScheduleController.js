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

const SiteServices = require('../services/SiteServices');
const TeamServices = require('../services/TeamServices');

class ScheduleController {
    showSchedule = async (req, res, next) => {
        res.render('schedule');
    }
}

module.exports = new ScheduleController;