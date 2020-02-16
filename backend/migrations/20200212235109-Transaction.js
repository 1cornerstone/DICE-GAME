'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("Transactions",{

      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      sentUsername :{
        allowNull: false,
        type: Sequelize.STRING
      },
      receivedUsername :{
        allowNull: false,
        type: Sequelize.STRING
      },
      amount :{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status :{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      txnID:{
        type :Sequelize.STRING,
        allowNull:false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

  },

  down: (queryInterface, Sequelize) => {
        queryInterface.dropTable('Transactions')
  }
};
