const { models } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findLatestMatchId = async () => {
    const latestMatch = await models.TranDau.findOne({
        order: [
            ['MaTD', 'DESC']
        ],
        raw: true,
    });
    
    if (latestMatch!==null) {
        return latestMatch.MaTD;
    } else {
        return "TD0";
    }
}

exports.createMatch = async (match_id, team1_id, team2_id, location, start_time, start_date) => {
    return await models.TranDau.create({
        MaTD: match_id,
        MaDB1: team1_id,
        MaDB2: team2_id,
        MaSD: location,
        GioBatDau: start_time,
        NgThiDau: start_date,
    });
}

exports.findAllMatch = async () => {
    return await models.TranDau.findAll({
        raw: true,
    });
}

exports.findMatchById = async (id) => {
    return await models.TranDau.findOne({
        where: {
            MaTD: id,
        },
        raw: true,
    });
}