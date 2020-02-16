const Sequelize = require('../db/sequelORM');

module.exports = (Sequel) => {
    return Sequel.define('Transaction', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        sentUsername: {
            allowNull: false,
            type: Sequelize.STRING
        },
        receivedUsername: {
            allowNull: false,
            type: Sequelize.STRING
        },
        amount: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        txnID: {
            type: Sequelize.UUIDV4,
            allowNull: false
        }
        ,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
};