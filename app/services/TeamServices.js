const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findAllTeams = async() => {
    return await models.DoiBong.findAll({
        raw: true,
    });
}

exports.findTeamById = async(id) => {
    return await models.DoiBong.findOne({
        where: {
            MaDB: id,
        },
        raw: true,
    });
}

exports.findAllMembers = async(id) => {
    return await models.CauThu.findAll({
        where: {
            MaDB: id,
        },
        raw: true,
    });
}

exports.findLeaderById = async(id) => {
    return await models.NguoiDangKy.findOne({
        where: {
            MaNDK: id
        },
        raw: true,
    });
}