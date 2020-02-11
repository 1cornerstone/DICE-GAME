'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return   queryInterface.createTable('Users',{

        id:{
          type: Sequel.INTEGER,
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
          default:0,
          type:Sequelize.STRING
        }	,
        balance:{
          type: Sequelize.INTEGER,
          default:0

        },
        win:{
          default:0,
          type:Sequelize.INTEGER
        }	,
        lose:{
          default:0,
          type:Sequelize.INTEGER
        },
        createAt: Sequelize.DATE,
        updateAt: Sequelize.DATE
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
