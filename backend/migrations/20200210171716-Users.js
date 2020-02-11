'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return   queryInterface.createTable('Users',{
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
      name:{
        type: Sequelize.STRING(100),
        allowNull:false
      },
      username:{
        type:Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
        password:{
          allowNull: false,
          type:Sequelize.STRING
        }	,
        balance:{
          type: Sequelize.INTEGER,
          defaultValue:0

        },
        win:{
          defaultValue:0,
          type:Sequelize.INTEGER
        }	,
        lose:{
          defaultValue:0,
          type:Sequelize.INTEGER
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
