const { models } = require('../models');
const Sequelize = require('sequelize');


const Op = Sequelize.Op;

exports.findAllPlayersByTeamId = async (teamId) => {
    return await models.CauThu.findAll({
        raw: true,
        where: {
            MaDB: teamId
        }
    });
}

exports.findPlayerById = async (id) => {
    return await models.CauThu.findOne({
        raw: true,
        where: {
            MaCT: id
        }
    });
}

exports.sumMembers = async (teamId) => {
    return await models.CauThu.count({
        where: {
            MaDB: teamId
        }
    });
}

exports.addPlayer = async (playerName, playerNumber, playerPosition, birth, height, weight, teamId) => {
    const maxId = await models.CauThu.max('MaCT');
    let id;
    let nextId;

    if (maxId) {
        id = maxId.substring(2, 4);
        nextId = "CT" + (parseInt(id) + 1);
    } else {
        nextId = "CT1";
    }

    try {
        const player = await models.CauThu.create(
            {
                MaCT: nextId,
                TenCT: playerName,
                MaDB: teamId,
                NgSinhCT: birth,
                ChieuCaoCT: height,
                CanNangCT: weight,
                SoAoCT: playerNumber,
                ViTri: playerPosition
            }
        );
        return team;
    } catch (error) {
        return false;
    }
}

// exports.updatePlayer = async (player) => {
//     return await models.CauThu.update({
//         where: {
//             MaCT: player.params.id
//         }
//     });
// }