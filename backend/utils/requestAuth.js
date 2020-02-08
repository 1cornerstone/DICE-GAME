const validator = require('express-validator').validationResult;


 const requestAuth =(req,res)=>{
     let check = validator(req);
     if (!check.isEmpty()) return res.status(402).json({errors: check.array()});
 };

 module.exports = requestAuth