const validatorRequest = require('../utils/requestAuth'),
    userModel = require('../models/User'),
    auth = require('../middlewares/auth'),
    passCrypt = require('../utils/passCrypt'),
    err = require('../utils/errorHandler'),
    {noAlphanumeric, withAlphanumeric,isEmail} = require('../utils/node-validator');

const registerFunc = async (req, res) => {

    validatorRequest(req, res);

    // validate body using regrex before using it

    if (!noAlphanumeric(req.body.name)) return res.send(`name is not accepted`); // noAlphanumeric : no digit except white space and letters
    if (!isEmail(req.body.email)) return res.send(`Email is not well formatted `); // check if emsil i well formatted
    if (!withAlphanumeric(req.body.username)) return res.send(`username is not accepted`);// Username can contain @ and also numbers
    if (!withAlphanumeric(req.body.password)) return res.send(`password is not accepted`);

    // encrypt password
    let newPassword = await passCrypt.crypt(req.body.password).catch(err);

    const User = userModel(Sequel);

    // insert data into database
    let dbresponse = await User.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: newPassword
    }).catch((err) => {
        res.send(`${err.errors[0].path} : ${err.errors[0].value} is already taken`)
    });

    //if data is saved
    if (dbresponse !== undefined) {
        let token = await auth.createSession(req.body.username); // generate token
        res.send({ 'token':token}); // send token as response
    }

};
module.exports = registerFunc;