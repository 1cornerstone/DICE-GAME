const router = require('express').Router(),
     {login,signup,forgotPassword} = require('../utils/expressValidator'); //middleware that check request if contain the field needed


router.post('/signup', signup ,require('../controllers/registerUserController'));
router.post('/login', login ,require('../controllers/loginController'));
router.get('/account/:token', require('../controllers/accountController'));
router.get('/logout/:token',require('../controllers/logoutController'));
router.get('/forgotpassword/:email',forgotPassword,require('../controllers/forgotPasswordController'));
router.get('/availablePlayer',require('../controllers/getPlayerList'));      //get list of the available players

// wallet topup, send money internally, receive, transactions,forgotten password


module.exports = router;