const passport = require("../auth/passport");

// class AuthController {
//
// }
//
// module.exports = new AuthController;


exports.isLogin = async (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/login')
    }
}

exports.loginPage = (req, res, next) => {
    res.render('login', { title: `auth`, layout: 'loginLayout.hbs', loginFailed: req.query.loginFailed !== undefined });
    // res.render('login', { title: `auth`, layout: 'layouts/main.hbs', loginFailed: req.query.loginFailed !== undefined });
}


exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
