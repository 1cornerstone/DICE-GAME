const validatorRequest = require('../utils/requestAuth'),
    userModel = require('../models/User'),
    {withAlphanumeric} = require('../utils/node-validator'),
    auth = require('../middlewares/auth'),
    err = require('../utils/errorHandler'),
    passCrypt = require('../utils/passCrypt');


const  loginFunc = async (req,res) =>{

      let check = validatorRequest(req,res);
    if (!check.isEmpty()) {return res.status(402).json({errors: check.array()});}

        if (!withAlphanumeric(req.body.username)) return res.send(`username is not accepted`);// Username can contain @ and also numbers
        if (!withAlphanumeric(req.body.password)) return res.send(`password is not accepted`);

        const User = userModel(Sequel);

        //check if username exist
       let response = await User.findAll({
                where: { username : req.body.username}
        }).catch(err);

    if (response.length === 0 ) return  res.send('Username  does not exist');

     response = await passCrypt.compPassword(req.body.password ,response[0].dataValues.password).catch(err);

        if (response === true) {
               let token = await auth.createSession(req.body.username); // generate token
                res.send({ 'token':token});
        }else{ res.send('password not correct')}

};
module.exports = loginFunc;