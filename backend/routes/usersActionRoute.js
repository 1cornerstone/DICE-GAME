const router = require('express').Router(),
     {login,signup} = require('../utils/validator'),
    seq = require('../db/sequelORM');


router.post('/signup', signup ,require('../controllers/registerUserController'));
router.post('/login', login ,require('../controllers/loginController'));
router.get('/availablePlayer',require('../controllers/getPlayerList'));      //get list of the available players


module.exports = router;