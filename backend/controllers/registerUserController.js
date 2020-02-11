const validatorRequest = require('../utils/requestAuth'),
    userModel = require('../models/User'),
    pasCrypt = require('../utils/passCrypt'),
    err = require('../utils/errorHandler'),
    {noAlphanumeric,withAlphanumeric} = require('../utils/regrexValidator');

const  registerFunc =  async (req,res) =>{

        validatorRequest(req,res);

        // validate body using regrex before using it

        if (!noAlphanumeric(req.body.name)) return  res.send(`name is not accepted`) ; // noAlphanumeric : no digit except white space and letters
        if (!withAlphanumeric(req.body.username)) return res.send(`username is not accepted`);// Username can contain @ and also numbers
        if (!withAlphanumeric(req.body.password)) return res.send(`password is not accepted`);

        // crypt password
      await  pasCrypt.crypt(req.body.password).then(data =>{

                 // userModel.create({
                 //           name: req.body.name,
                 //           username :req.body.username,
                 //           password: data
                 // }).then(result =>{
                 //     res.send(result)
                 // }).catch(err)

        }).catch(err)

};
module.exports = registerFunc;