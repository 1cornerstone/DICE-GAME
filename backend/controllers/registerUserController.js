const validatorRequest = require('../utils/requestAuth');

const  registerFunc = (req,res) =>{

        validatorRequest(req,res);


};
module.exports = registerFunc;