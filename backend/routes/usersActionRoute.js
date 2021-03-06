const router = require('express').Router(),
     {login,signup,forgotPassword,sendMoney,topUp,receiveMoney,confirmMoneyRequest} = require('../utils/expressValidator'); //middleware that check request if contain the field needed


router.post('/signup', signup ,require('../controllers/registerUserController'));
router.post('/login', login ,require('../controllers/loginController'));
router.get('/account/:token', require('../controllers/accountController'));
router.get('/logout/:token',require('../controllers/logoutController'));
router.get('/forgotpassword',forgotPassword,require('../controllers/forgotPasswordController')); // not finished
router.get('/availablePlayer',require('../controllers/getPlayerList'));      //get list of the available players
router.post('/topup',topUp,require('../controllers/topUpController')); //topup account using Paypal
router.get('/transactions/:token',require('../controllers/transactionController')); //fetch user  transactions both sent and received
router.post('/receivemoney',receiveMoney,require('../controllers/receiveMoneyController')); //request for money
router.post('/confirmMoneyRequest',confirmMoneyRequest,require('../controllers/confirmMoneyRequestController'));

router.post('/sendmoney',sendMoney,require('../controllers/sendMoneyController')); //not done

//  send money internally, receive, transactions,forgotten password.


module.exports = router;