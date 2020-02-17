
const Sequelize = require('../db/sequelORM'),
    err = require('../utils/errorHandler'),
    userModel = require('../models/User'),
    transactionModel = require('../models/Transactions'),
     auth = require('../middlewares/auth'),
    uuidv1 = require('uuid/v1'),
    validatorRequest = require('../utils/requestAuth');


const topUp = async (req,res)=>{

    validatorRequest(req,res);

    if (req.body.token === null || undefined) return res.send('unAuthorized'); // if user didnt provide token this will reject his request

    let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token

    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

    const User = userModel(Sequel);

    let txnID = uuidv1().replace(/-/g,"");

     const  update =  await User.update(
         {
            balance: Sequelize.literal('balance + '+req.body.amount),
             receive: Sequelize.literal('receive +'+req.body.amount),
     }, { where :{ username : username} });

if (update[0] === 1) {

    const transaction =transactionModel(Sequel);
    const dbResponse = transaction.create({
        sentUsername :'DG',
        receivedUsername: username,
        amount: req.body.amount,
        txnID:txnID,
        status: 1
    });

    if (dbResponse !== undefined) {
        res.send(`Account topup`);
    }
}

 };

module.exports = topUp;