const { models } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const UserServices = require('../services/UserServices')

const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
    },
    async function (email, password, done) {
        console.log(email, password);

        try {

            const user = await UserServices.findUserByEmail(email);

            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            const match = await validPassword(user, password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
        catch (err) {
            done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, { email: user.Email, id: user.MaNDK });
});


passport.deserializeUser(async function (user, done) {
    return done(null, user);
});



async function validPassword(user, password) {

    return bcrypt.compare(password, user.MatKhauNDK);
    // return bcrypt.compare(password, user.password);
}

module.exports = passport;
