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
router.post('/members/:id', AuthController.islogin, RegisterController.updateMember);
router.delete('/members/:id', AuthController.islogin, RegisterController.deleteMember);
router.get('/members/:id/edit', AuthController.islogin, RegisterController.editMember);

module.exports = router;