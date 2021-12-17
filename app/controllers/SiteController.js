const SiteServices = require('../services/SiteServices');
const TeamServices = require('../services/TeamServices');
class SiteController {
    home = async (req, res, next) => {
        res.render('home');
    }

    showRule = async (req, res, next) => {
        res.render('rule');
    }

    showAbout = async (req, res, next) => {
        res.render('about');
    }
}

module.exports = new SiteController;