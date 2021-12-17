
const UserService = require('../services/UserServices');

class RegisterController {
    show = async (req, res, next) => {

        res.render('register', {
            title: 'SEM | Đăng ký đội|',
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
}

module.exports = new RegisterController;