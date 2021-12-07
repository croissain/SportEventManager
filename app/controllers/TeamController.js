const router = require("../routes/tournament");


class TeamController {
    show = async (req, res, next) => {
        res.render("team");
    }
}

module.exports = new TeamController;