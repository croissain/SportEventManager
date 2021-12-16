const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findAllTournaments = async() => {
    return await models.GiaiDau.findAll({
        raw: true,
    });
}