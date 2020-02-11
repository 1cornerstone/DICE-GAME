    dotenv = require('dotenv').config();

const errorHandler =(err)=>{
    if (process.env.appMode ==='development') {
        console.log(err)
    }
};

module.exports = errorHandler;