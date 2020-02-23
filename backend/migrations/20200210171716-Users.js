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
      email:{
        type:Sequelize.STRING(200),
        allowNull: false,
        unique: true,
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
      sent: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      receive: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      state:{
          type:Sequelize.STRING
      },
      country :{
        type : Sequelize.STRING
      },
      image :{
          type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
