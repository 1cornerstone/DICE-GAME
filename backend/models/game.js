
const Sequelize = require('../db/sequelORM');

const game = (Sequel) =>{

    Sequel.define('Game',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Username:{

        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
};

module.exports = game;