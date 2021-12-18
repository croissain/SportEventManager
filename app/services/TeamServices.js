const {models} = require('../models');
const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");
const Op = Sequelize.Op;
const TouramentService = require('../services/TournamentServices');

exports.findAllTeams = async() => {
    return await models.DoiBong.findAndCountAll({
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


exports.findTeamByLeaderId = async(id) => {
    return await models.DoiBong.findOne({
        where: {
            MaNDK: id,
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

exports.addTeam = async (name, tournamentName, userId, color) => {
    const maxId = await models.DoiBong.max('MaDB');
    const id = maxId.substring(2,4);
    const nextId = "DB" + (parseInt(id) + 1);

    const tournament = await TouramentService.findTournamentByName(tournamentName);
    const tournamentId = tournament.MaGD;

    try {
        const team = await models.DoiBong.create(
            {
                MaDB: nextId,
                TenDB: name,
                MauAo: color,
                MaNDK: userId,
                MaGD: tournamentId
            }
        );
        return team;
    } catch (error) {
        return false;
    }
}