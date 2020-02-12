const {check, validationResult} = require('express-validator');

let name = "name", email = 'email', password = "password", username = "username";

let signup = [nameFunc(),emailFunc(), usernameFunc(), passwordFunc()];

let login = [usernameFunc(), passwordFunc()];

let forgotPassword = [ emailFunc() ];

function nameFunc() {
    return (
        check(name).not().isEmpty().withMessage("Name is empty"),
        check(name).isLength({min: 6}).withMessage("Name too short")
    )
}

function usernameFunc() {
    return (
        check(username).not().isEmpty().withMessage("email is empty"),
            check(username).isLength({min: 5}).withMessage("Email too short, < 5")
    )
}

function passwordFunc() {
    return (
        check(password).not().isEmpty().withMessage("password is empty"),
            check(password).isLength({min: 5}).withMessage("password too short < 5")
    )
}


function emailFunc() {

    return (
        check(email).not().isEmpty().withMessage("Email is empty"),
            check(email).isEmail().withMessage("Invalid Email"),
            check(email).isLength({min: 5}).withMessage("Email too short, < 5")
    )
}


module.exports = {signup, login, forgotPassword};

