
 const Sequelize = require('../db/sequelORM');

module.exports = () =>{

  return Sequel.define("User", {

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

    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      default: 0,
      allowNull: false,
      type: Sequelize.STRING
    },

    balance: {
      default: 0,
      type: Sequelize.INTEGER
    },

    win: {
      default: 0,
      type: Sequelize.INTEGER
    },

    lose: {
      default: 0,
      type: Sequelize.INTEGER
    }

  });
};


