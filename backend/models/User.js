const Sequelize = require('../db/sequelORM');
module.exports = (Sequel) => {

    return Sequel.define('User', {

        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            allowNull: false,
            type: Sequelize.STRING
        },

        balance: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        },

        win: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        },

        lose: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        }, sent: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        },
        receive: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });
};


