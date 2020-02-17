const validator = require('express-validator').validationResult;


 const requestAuth =(req,res)=>{
     return validator(req);
 };

 module.exports = requestAuth