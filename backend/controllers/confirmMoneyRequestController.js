
const  validatorRequest = require('../utils/requestAuth'),
    {withAlphanumeric} = require( "../utils/node-validator"),
    err = require('../utils/errorHandler'),
    auth = require('../middlewares/auth'),
    passCrypt = require('../utils/passCrypt'),
    userModel = require('../models/User'),
    transactions = require('../models/Transactions');


const  confirmMoneyRequest =async (req,res) =>{

    /*
    * confirm money
    *  token and txnID
    *
    * */

    let check = validatorRequest(req,res);
    if (!check.isEmpty()) {return res.status(402).json({errors: check.array()});}

    if (!withAlphanumeric(req.body.username)) return res.send(`username is not accepted`);// Username can contain @ and also numbers
    if (!withAlphanumeric(req.body.password)) return res.send(`password is not accepted`);
    let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token
    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

    const User = userModel(Sequel);

    //check if username exist
    let response = await User.findAll({
        where: { username :username}
    }).catch(err);


    if (response.length === 0 ) return res.send('Username  does not exist');

    response = await passCrypt.compPassword(req.body.password ,response[0].dataValues.password).catch(err);

    if (response === true) {

       let transaction = await transactions(Sequel);

        let transactionResult = await transaction.update({
            status: 1
        },{where: {
                 sentUsername: username,
                txnID : req.body.txnID
            }}).catch(err);

        if (transactionResult[0] === 1) {
            res.send(`money granted`);
        }else{
            res.send('No Update')
        }
    }else{ res.send('password not correct')}

};

module.exports  = confirmMoneyRequest;