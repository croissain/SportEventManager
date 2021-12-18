const {models} = require('../models');
const Sequelize = require('sequelize');


const Op = Sequelize.Op;

exports.findAllSoccerByTeamId= async(teamId) => {
    return await models.CauThu.findAll({
        raw: true,
        where: {
            MaDB: teamId
        }
    });
}

exports.addPlayer = async (playerName, playerNumber, playerPosition, birth, height, weight, teamId) => {
    const maxId = await models.CauThu.max('MaCT');
    const id = maxId.substring(2,4);
    const nextId = "CT" + (parseInt(id) + 1);

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