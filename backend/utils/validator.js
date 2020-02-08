const {check,validationResult} = require('express-validator');

let name = "name", password = "password", username = "username";

let signup = [
    check(name).not().isEmpty().withMessage("Name is empty"),
    check(name).isLength({min: 6}).withMessage("Name too short"),

    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5"),

    check(username).not().isEmpty().withMessage("username is empty"),
    check(username).isLength({min: 5}).withMessage("username too short < 5")
];

let login = [

    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5"),

    check(username).not().isEmpty().withMessage("email is empty"),
    check(username).isLength({min: 5}).withMessage("Email too short, < 5"),

];


module.exports= {signup,login};