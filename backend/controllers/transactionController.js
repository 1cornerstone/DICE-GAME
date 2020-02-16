const Sequelize = require('../db/sequelORM'),
    err = require('../utils/errorHandler'),
    transactionModel = require('../models/Transactions'),
    auth = require('../middlewares/auth');


const transactions = async (req, res) => {

    if (req.params.token === null || undefined) return res.send('unAuthorized'); // if user didnt provide token this will reject his request

    let username = await auth.getSession(req.params.token).catch(err);  // get user username with his token

    if (username === null || undefined) return res.send('unAuthorized'); // if null token have expired or not valid

    const transaction = transactionModel(Sequel);

    const result = await transaction.findAll({
        where: Sequelize.or(
            {sentUsername: username},
            {receivedUsername: username}
        ),
        order: [['id', 'DESC']]
    });

    res.send(result)

};


module.exports = transactions;