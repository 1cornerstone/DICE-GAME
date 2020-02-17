
    const {isEmail,isNumber} = require('../utils/node-validator'),
        auth =require('../middlewares/auth'),
        userModel = require('../models/User'),
        passCrypt = require('../utils/passCrypt'),
         err = require('../utils/errorHandler'),
        validatorRequest = require('../utils/requestAuth');

const sendMoneyFunc = async (req,res) =>{

    let check = validatorRequest(req,res);
    if (!check.isEmpty()) {return res.status(402).json({errors: check.array()});}

    let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token

    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid
    if (!isEmail(req.body.rec_email)) return res.send('Receiver Email not accepted'); //check if sender email is well formatted
    if (!isNumber(req.body.amount)) return res.send('Amount must be number');

    // validate user  then make transfer
    const User = userModel(Sequel);

    let response = await User.findAll({
        where: { username : username}
    }).catch(err);

   let checkPassword = await passCrypt.compPassword(req.body.password ,response[0].dataValues.password).catch(err);

    if ( checkPassword === true) {
           /*
           * check sender balance if amount can be deducted and
           * if it can be,  deduct the balance and also increment the sent out
           *  add money to the receiver balance and increment the receive side
           * lock account
           * */


    }else{ res.send('password not correct')}

};

function checkBalance (balance ,amount){
    if (parseInt(balance) > parseInt(amount)) return true;
}

function deduction(value1,value2){
    return (parseInt(value1) - parseInt(value2));
}

function increment(value1,value2){
    return (parseInt(value1) + parseInt(value2));
}


module.exports = sendMoneyFunc;
