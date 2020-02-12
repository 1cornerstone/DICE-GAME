
const userModel = require('../models/User');

 const forgotPasswrdFunc = async (req,res) =>{

    let user = userModel(Sequel);

    let check = await user.findAll({
         where: { email: req.body.email}
    });

    //if user exist send mail to the user to reset his/her password else do nothing

 };
module.exports = forgotPasswrdFunc;