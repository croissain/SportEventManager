const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');

exports.findAllUser = async() => {
    return await models.NguoiDangKy.findAll({
        raw: true,
    });
}

exports.findUserByEmail = async(email) => {
    return await models.NguoiDangKy.findOne({
        raw: true,
        where: {
            Email: email
        }
    });
}

exports.findAllUserEmail = async() => {
    return await models.NguoiDangKy.findAll({
        raw: true,
        attributes: [
            'Email'
        ]
    });
}

exports.isExistEmail = async(email) => {
    const Users = await models.NguoiDangKy.findAndCountAll({
        raw: true,
        where: {
            Email: email
        }
    });
    if (Users.count > 0)
        return true;
    return  false;
}

exports.addUser = async(fullName, phone, email, password) => {
    const maxId = await models.NguoiDangKy.max('MaNDK');
    const id = maxId.substring(3,5);
    const nextId = "NDK" + (parseInt(id) + 1);

    const saltRounds = 5;
    const hashPassword = await bcrypt.hash(password,saltRounds);

    try {
        const user = await models.NguoiDangKy.create(
            {
                MaNDK: nextId,
                TenNDK: fullName,
                SDT: phone,
                Email: email,
                Password: hashPassword
            }
        );
        return user;
    } catch (error) {
        return false;
    }
}
