const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.findLocation = async(id) => {
    return await models.SanDau.findOne({
        where: {
            MaSD: id,
        },
        raw: true,
    });
}