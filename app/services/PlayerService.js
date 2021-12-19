const { models } = require('../models');
const Sequelize = require('sequelize');


const Op = Sequelize.Op;

exports.findAllSoccerByTeamId = async (teamId) => {
    return await models.CauThu.findAll({
        raw: true,
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
                SoAo: playerNumber,
                ViTri: playerPosition
            }
        );
        return team;
    } catch (error) {
        return false;
    }

}