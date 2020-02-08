/*
* Using Array as store.
* when User not more interacting with the app, his/her data{win || lose and wallet balance } will be updated in database
* */

const userModel = require('../models/User');

let Users = [
    {Username: "Computer", status: 'online', win: 1, lose: 0, isPlaying: 1},
    {Username: 'akintunde', status: 'online', win: 1, lose: 0, isPlaying: 0}

];

module.exports.isUsernameUsed = (username) => {

    var usernameOccurred = Users.find(el => el.Username === username);
    return new Promise((resolve, reject) => {
        (usernameOccurred === undefined) ? (resolve("Available")) : (reject("Used"))
    })

};

module.exports.Join = (username) => {

    return new Promise((resolve, reject) => {
        if (Users.push(userModel.user(username))) {
            resolve(Users)
        } else {
            reject('error')
        }
    })
};

module.exports.Left = (username) => {
    Users = Users.filter(person => person.Username !== username);
    return Users;
};

module.exports.Users = () => {
    return new Promise((resolve, reject) => {
        resolve(Users);
    })
};

module.exports.checkAvailablePlayer = (username) => {
    var user = Users.find((el => (el.Username !== username && el.isPlaying === 0)));

    return new Promise((resolve, reject) => {
        (user === undefined) ? (reject("No Player Available")) : (resolve(user))
    })

};


// ##################################

module.exports.pairPlayer =()=>{


};


