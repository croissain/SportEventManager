const {models} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const UserServices = require('../services/UserServices')

const passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async function(email, password, done) {
        console.log(email,password);

        try
        {

            const user = await UserServices.findUserByEmail(email);

            ////////test/////////
            // let user = null;
            // if (email === "ngvana@gmail.com")
            // {
            //     user = {
            //         email: "ngvana@gmail.com",
            //         password: "$2b$05$PdMtge8ocK4oeq8UY4e6k.V.Z5dvbm8TlAsf7qozkrcqnMG2IrhrW"
            //         // pass: zxcvbnm123
            //     }
            // }
            // else if (email === "ngvanb@gmail.com")
            // {
            //     user = {
            //         email: "ngvanb@gmail.com",
            //         password: "$2b$05$JXGuej/HvJau/tUsuskFyecpuMXp2QCSSPARxseiK4dyRpU/L1Wh6"
            //         // pass: abcxyz123
            //     }
            // }

            ////////test/////////

            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            const match = await validPassword(user,password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
        catch (err){
            done(err);
        }
    }

));

passport.serializeUser(function(user, done) {
    done(null, {email: user.Email, id: user.MaNDK});
});


passport.deserializeUser(async function(user, done) {
    return done(null, user);
});



async function validPassword(user,password){

    return bcrypt.compare(password, user.Password);
    // return bcrypt.compare(password, user.password);
}

module.exports = passport;
