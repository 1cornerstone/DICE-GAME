
const Sequelize = require('../db/sequelORM'),
    err = require('../utils/errorHandler'),
    userModel = require('../models/User'),
    transactionModel = require('../models/Transactions'),
    auth = require('../middlewares/auth'),
    uuidv1 = require('uuid/v1');

 const receiveMoney = async (req,res) =>{

     /*
     * if sent out is not greeter than 2000
     * user can receive
     * if greater than , receiver provider giver email, amount,description,type
     * then giver get notified and confirmed if the request is valid or not. if not User will be disable for 2 days
     * giver confirmed by pressing his password
     *  */


  if (req.body.token === null || undefined) return res.send('unAuthorized'); // if user didnt provide token this will reject his request

  let username = await auth.getSession(req.body.token).catch(err);  // get user username with his token

  if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

  if (!isEmail(req.body.rec_email)) return res.send('Receiver Email not accepted'); //check if sender email is well formatted
  if (!isNumber(req.body.amount)) return res.send('Amount must be number');

  const User = userModel(Sequel);
  let response = await User.findAll({
   where: { username : username}
  }).catch(err);

  if (response[0].dataValues.sent < 2000) return res.send(`${username} cannot request for money`);


  let updateResponse = await  User.update({
     balance: Sequelize.literal('balance - '+ req.body.amount),
     sent: Sequelize.literal('sent + '+ req.body.amount)
  },{where: username}).catch(err);

  if (updateResponse[0] === 1) {

   const transaction =transactionModel(Sequel);
   const dbResponse = transaction.create({
    sentUsername :username,
    receivedUsername:req.body.rec_email ,
    amount: req.body.amount,
    txnID:txnID,
    status: 0
   });

   if (dbResponse !== undefined) {
    res.send(`Request sent`);
   }
  }





 };

module.exports = receiveMoney;