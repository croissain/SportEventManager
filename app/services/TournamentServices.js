const { models } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findAllTournaments = async () => {
    return await models.GiaiDau.findAll({
        raw: true,
    });
}

exports.findTournamentByName = async (name) => {
    return await models.GiaiDau.findOne({
        raw: true,
        where: {
            TenGD: name
        }
    });
}

exports.findTournamentsByName = async (name) => {
    return await models.GiaiDau.findAll({
        raw: true,
        where: {
            TenGD: {
                [Op.iLike]: `%${name}%`
            }
        }
    });
}

exports.findTournamentDeadlineById = async (id) => {
    return await models.GiaiDau.findOne({
        raw: true,
        where: {
            MaGD: id
        },
        attributes: [
            'HanCuoiDangKy'
        ]
    });
}

exports.findTournamentNameById = async (id) => {
    return await models.GiaiDau.findOne({
        raw: true,
        where: {
            MaGD: id
        },
        attributes: [
            'TenGD'
        ]
    });
}