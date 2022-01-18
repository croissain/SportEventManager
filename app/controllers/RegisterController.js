const { models } = require('../models');

const UserService = require('../services/UserServices');
const TournamentService = require('../services/TournamentServices');
const TeamService = require('../services/TeamServices');
const PlayerService = require('../services/PlayerService');

class RegisterController {
    show = async (req, res, next) => {

        res.render('register', {
            title: 'SEM | Đăng ký tài khoản|',
            layout: 'registerLayout.hbs',
            registerFailed: req.query.registerFailed !== undefined
        });
    }

    registerUser = async (req, res, next) => {
        const email = req.body.email;
        const isExistEmail = await UserService.isExistEmail(email);
        if(isExistEmail){
            // res.render('register', {
            //     title: 'SEM | Đăng ký đội|',
            //     layout: 'registerLayout.hbs',
            //     registerFailed: req.query.registerFailed !== undefined
            // });
            res.redirect('/register?registerFailed');
        }
        else{

            const { name, phone_number, password} = req.body;
            try{
                const user = await UserService.addUser(name, phone_number, email, password);
                console.log(user);

                res.redirect('/');
            }catch (e){

            }

        }

    }

    registerTeamPage = async (req, res, next) => {


        const userId = req.user.id;
        const team = await TeamService.findTeamByLeaderId(userId);
        if(team){
            res.redirect('/register/members');
        }
        else{
            try{
                const tournaments = await TournamentService.findAllTournaments();
                console.log(tournaments);

                res.render('registerTeam', {
                    title: 'SEM | Đăng ký đội|',
                    layout: 'registerLayout.hbs',
                    tournaments
                });
            }catch (e){

            }
        }
    }

    registerTeam = async (req, res, next) => {
        const { teamName, tournamentName, color} = req.body;
        const userId = req.user.id;
        try{
            const team = await TeamService.addTeam(teamName, tournamentName, userId, color);
            console.log(team);

            res.redirect('/');
        }catch (e){

        }

    }

    registerMemberPage = async (req, res, next) => {
        try{
            const userId = req.user.id;
            const team = await TeamService.findTeamByLeaderId(userId);
            const teamId = team.MaDB;
            const members = await PlayerService.findAllPlayersByTeamId(teamId);

            const tournamentId = team.MaGD;
            const tournament = await TournamentService.findTournamentDeadlineById(tournamentId);
            const tournamentName = await TournamentService.findTournamentNameById(tournamentId);
            const deadline =  new Date(tournament.HanCuoiDangKy);
            const now = new Date();
            let isDeadlineTournament = undefined;
            if (now.getTime() >= deadline.getTime()){
                isDeadlineTournament = true;
            }
                res.render('register-members', {
                title: 'SEM | Đăng ký thành viên|',
                layout: 'main.hbs',
                members,
                teamId,
                tournamentName,
                isDeadlineTournament
            });

        }catch (e){
            return false;
        }
    }

    addMember = async (req, res, next) => {

        try{

            const {playerName, playerNumber, playerPosition, birth, height, weight, teamId} = req.body;
            try{
                const user = await PlayerService.addPlayer(playerName, playerNumber, playerPosition, birth, height, weight, teamId);
                await PlayerService.sumMembers(teamId);
                console.log(user);

                res.redirect('/register/members');
            }catch (e){

            }

            res.redirect('/register/members');
        }catch (e){

        }
    }

    editMember = async (req, res, next) => {
        const member = await PlayerService.findPlayerById(req.params.id);
        res.render('members-edit', {
            title: 'SEM | Sửa thành viên|',
            member,});
    }

    updateMember = async (req, res, next) => {
        await models.CauThu.update(req.body, {
                where: {
                    MaCT: req.params.id
                }
        })
        res.redirect('/register/members');
    }

    deleteMember = async (req, res, next )=> {
        console.log(req.params.id);
        await models.CauThu.destroy({
            where: {
                MaCT: req.params.id
            },
            force: true
        });
        res.redirect('back');
    }
}

module.exports = new RegisterController;