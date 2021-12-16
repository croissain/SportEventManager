const passport = require("../auth/passport");
class AuthController {

    islogin = async (req, res, next) => {
        if (req.user) {
            next()
        } else {
            res.redirect('/auth/login')
        }
    }

    loginPage = async (req, res, next) => {
        res.render('login', { 
            title: `auth`, 
            layout: 'loginLayout.hbs', 
            loginFailed: req.query.loginFailed !== undefined });
        // res.render('login', { title: `auth`, layout: 'layouts/main.hbs', loginFailed: req.query.loginFailed !== undefined });
    }

    logout = async (req, res, next) => {
        req.logout();
        res.redirect('/');
    }

}

module.exports = new AuthController;