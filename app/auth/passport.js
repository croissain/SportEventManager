const passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
    },
    async function(username, password, done) {
        console.log(username,password);

        try
        {

            // const user = await models.users.findOne({
            //     where: {
            //     },
            //     raw: true
            // });

            ////////test/////////
            let user = null;
            if (username === "sang")
            {
                user = {
                    username: "sang",
                    password: "123"
                }
            }

            ////////test/////////

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
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
    done(null, {username: user.username});
});


passport.deserializeUser(async function(user, done) {
    return done(null, user);
});



async function validPassword(user,password){
    //test
    if (user.password === password){
        return true;
    }
    return false;

    // return bcrypt.compare(password, user.password);
}

module.exports = passport;
