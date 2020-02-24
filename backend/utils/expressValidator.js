const {check, validationResult} = require('express-validator');

let name = "name", email = 'email', password = "password", username = "username";

const signup =[
    check(name).not().isEmpty().withMessage("Name is empty"),
    check(name).isLength({min: 6}).withMessage("Name too short"),

    check(username).not().isEmpty().withMessage("email is empty"),
    check(username).isLength({min: 5}).withMessage("Email too short, < 5"),

    check(email).not().isEmpty().withMessage("Email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),

    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5")
];

const login =[

    check(username).not().isEmpty().withMessage("Username is empty"),
    check(username).isLength({min: 5}).withMessage("Username too short, < 5"),
    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5")


];

const forgotPassword = [
    check(email).not().isEmpty().withMessage("Email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),
    check(email).isLength({min: 5}).withMessage("Email too short, < 5")

];

const sendMoney = [
    check(email).not().isEmpty().withMessage("email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),
    check(email).isLength({min: 5}).withMessage("Email too short, < 5"),
    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5"),
    check('amount').isNumeric().withMessage("Amount must be digit"),
    check('token').not().isEmpty().withMessage("token is empty")
]; // field required to send Dice-Game money : sender token,receiver email,sender password,amount

const  receiveMoney = [
    check(email).not().isEmpty().withMessage("email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),
    check(email).isLength({min: 5}).withMessage("Email too short, < 5"),
    check('amount').isNumeric().withMessage("Amount must be digit"),
    check('token').not().isEmpty().withMessage("token is empty")

];

const  confirmMoneyRequest = [
    check('token').not().isEmpty().withMessage("token is empty"),
    check('txnID').not().isEmpty().withMessage("Transaction ID is empty"),
    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5")


];

const topUp =[         check('token').not().isEmpty().withMessage("token is empty"),
    check('amount').isNumeric().withMessage("Amount must be digit")
];


module.exports = {signup, login, forgotPassword, sendMoney, topUp, receiveMoney, confirmMoneyRequest};

