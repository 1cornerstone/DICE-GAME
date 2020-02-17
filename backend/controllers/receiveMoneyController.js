const Sequelize = require('../db/sequelORM'),
    err = require('../utils/errorHandler'),
    userModel = require('../models/User'),
    {isNumber, withAlphanumeric} = require('../utils/node-validator'),
    transactionModel = require('../models/Transactions'),
    auth = require('../middlewares/auth'),
    uuidv1 = require('uuid/v1'),
    validatorRequest = require('../utils/requestAuth');

const receiveMoney = async (req, res) => {


    /*
    * if sent out is not greeter than 2000
    * user can receive
    * if greater than , receiver provider giver email, amount,description,type
    * then giver get notified and confirmed if the request is valid or not. if not User will be disable for 2 days
    * giver confirmed by pressing his password
    *  */


    let check = validatorRequest(req,res);
    if (!check.isEmpty()) {return res.status(402).json({errors: check.array()});}

    if (req.body.token === null || undefined) return res.send('unAuthorized'); // if user didnt provide token this will reject his request

    let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token

    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

    if (!withAlphanumeric(req.body.username)) return res.send('Giver Username not accepted'); //check if sender email is well formatted
    if (!isNumber(req.body.amount)) return res.send('Amount must be number');

    const User = userModel(Sequel);

    let response = await User.findAll({
        where: {username: username}
    }).catch(err);

    //if user have sent more than 2000DG only then he/she can request

    if (response[0].dataValues.sent < 2000) return res.send(`${username} cannot request for money`);

    let txnID = uuidv1().replace(/-/g, "");

    const transaction = transactionModel(Sequel);
    const dbResponse = transaction.create({
        sentUsername: req.body.rec_username ,
        receivedUsername: username,
        amount: req.body.amount,
        txnID: txnID,
        status: 0
    });

    if (dbResponse !== undefined) {
        res.send(`Request sent`);
    }

};

module.exports = receiveMoney;