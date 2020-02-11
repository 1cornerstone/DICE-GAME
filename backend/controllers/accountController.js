    const  auth = require('../middlewares/auth'),
        userModel = require('../models/User'),
        err = require('../utils/errorHandler');

const  accountFunc = async (req,res)=>{

    if (req.param.token === null || undefined) return res.send('unAuthorized'); // if user didnt provide token this will reject his request

   let username = await auth.getSession(req.params.token).catch(err);  // get user username with his token

   if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

    const User = userModel(Sequel);

    // fetch user detail
    let response = await User.findAll({
        where: { username : username}
    }).catch(err);

    res.send({
        name: response[0].name,
        username: response[0].username,
        balance: response[0].balance,
        win: response[0].win,
        lose: response[0].lose,
    })

};

module.exports = accountFunc;