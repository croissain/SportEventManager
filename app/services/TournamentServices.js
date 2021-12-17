const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findAllTournaments = async() => {
    return await models.GiaiDau.findAll({
        raw: true,
    });
}

exports.findTournamentByName = async(name) => {
    return await models.GiaiDau.findOne({
        raw: true,
        where: {
            TenGD: name
        }
    });
}