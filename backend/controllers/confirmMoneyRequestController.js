
const  validatorRequest = require('../utils/requestAuth'),
    {withAlphanumeric} = require( "../utils/node-validator"),
    err = require('../utils/errorHandler');


const  confirmMoneyRequest =async (req,res) =>{

    /*
    * confirm money
    *  token and txnID
    *
    * */

    validatorRequest(req,res);

    if (!withAlphanumeric(req.body.username)) return res.send(`username is not accepted`);// Username can contain @ and also numbers
    if (!withAlphanumeric(req.body.password)) return res.send(`password is not accepted`);
    let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token
    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid






};

module.exports  = confirmMoneyRequest;