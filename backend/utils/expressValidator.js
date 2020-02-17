const {check, validationResult} = require('express-validator');

let name = "name", email = 'email', password = "password", username = "username";

let signup = [nameFunc(), emailFunc(), usernameFunc(), passwordFunc()],
    login = [usernameFunc(), passwordFunc()],
    forgotPassword = [emailFunc()],
    sendMoney = [token(), usernameFunc(), passwordFunc(), amount()],// field required to send Dice-Game money : sender token,receiver email,sender password,amount
    receiverMoney = [usernameFunc(), token(), amount()],
    confirmMoneyRequest = [token(),passwordFunc(),txnIDFunc()],
    topUp = [token(), amount()];


function nameFunc() {
    return (
        check(name).not().isEmpty().withMessage("Name is empty"),
            check(name).isLength({min: 6}).withMessage("Name too short")
    )
}

function txnIDFunc() {
    return (
        check('txnID').not().isEmpty().withMessage("Transaction ID is empty")
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

function amount() {
    return (
        check('amount').isNumeric().withMessage("Amount must be digit")
    )
}

function token() {
    return (
        check('token').not().isEmpty().withMessage("token is empty")
    )
}



module.exports = {signup, login, forgotPassword, sendMoney, topUp, receiverMoney, confirmMoneyRequest,txnIDFunc};

