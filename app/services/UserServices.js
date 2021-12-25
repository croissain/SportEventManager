const { models } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcrypt');

exports.findAllUser = async () => {
    return await models.NguoiDangKy.findAll({
        raw: true,
    });
}

exports.findUserByEmail = async (email) => {
    return await models.NguoiDangKy.findOne({
        raw: true,
        where: {
            Email: email
        }
    });
}

exports.findAllUserEmail = async () => {
    return await models.NguoiDangKy.findAll({
        raw: true,
        attributes: [
            'Email'
        ]
    });
}

exports.isExistEmail = async (email) => {
    const Users = await models.NguoiDangKy.findAndCountAll({
        raw: true,
        where: {
            Email: email
        }
    });
    if (Users.count > 0)
        return true;
    return false;
}

exports.addUser = async (fullName, phone, email, password, avatar) => {
    const maxId = await models.NguoiDangKy.max('MaNDK');
    let nextId;
    const saltRounds = 5;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    if (maxId) {
        let idNumber = maxId.substring(3, 5);
        let nextIdInt = (parseInt(idNumber) + 1);

        if(nextIdInt > 0 && nextIdInt < 10){
            nextId = 'NDK' + '0' + nextIdInt;
        }
        else{
            nextId = 'NDK' + nextIdInt;
        }
    }
    else {
        nextId = "NDK01";
    }

    try {
        const user = await models.NguoiDangKy.create(
            {
                MaNDK: nextId,
                TenNDK: fullName,
                SDT: phone,
                Email: email,
<<<<<<< HEAD
                MatKhauNDK: hashPassword
=======
                MatKhauNDK: hashPassword,
                // AnhNDK
>>>>>>> c4e2b6186b6f9ce98f2603eccd94a83befdcb8e2
            }
        );
        return user;
    } catch (error) {
        return false;
    }

}
