const Sequelize = require('sequelize'),
        seqeulConfig = require('../config/config'),
        sequel = new Sequelize(seqeulConfig.development);

    sequel.authenticate().then(() => {
        console.log('Connection has been established successfully.');})
    .catch(err => {console.error('Unable to connect to the database:', err); });

 module.exports = sequel;
 global.Sequel = sequel;