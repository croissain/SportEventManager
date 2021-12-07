
class SiteController {
    home = async(req, res, next) => {
        res.render('home');
    }

    showRule = async(req, res, next) => {
        res.render('rule');
    }
}

module.exports = new SiteController;