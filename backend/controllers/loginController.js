const validatorRequest = require('../utils/requestAuth');

const  loginFunc = (req,res) =>{
        validatorRequest(req,res);
};
module.exports = loginFunc;