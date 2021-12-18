const express = require('express');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');
const AuthController = require('../controllers/AuthController');


router.get('/', RegisterController.show);
router.post('/', RegisterController.registerUser);
router.get('/team', AuthController.islogin, RegisterController.registerTeamPage);
router.post('/team', AuthController.islogin, RegisterController.registerTeam);
router.get('/members', AuthController.islogin, RegisterController.registerMemberPage);
router.post('/members/add', AuthController.islogin, RegisterController.addMember);



module.exports = router;