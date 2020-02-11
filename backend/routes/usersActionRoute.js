const router = require('express').Router(),
     {login,signup} = require('../utils/expressValidator');


router.post('/signup', signup ,require('../controllers/registerUserController'));
router.post('/login', login ,require('../controllers/loginController'));
router.get('/account/:token',require('../controllers/accountController'));
router.get('/logout/:token',require('../controllers/accountController'));
router.get('/availablePlayer',require('../controllers/getPlayerList'));      //get list of the available players


module.exports = router;