const {checkSession} = require('../middlewares/auth'),
    sessionStore = require('../db/redis');

const logOutFunc = (req, res) => {

    if (req.params.token === null || undefined) return res.send("UnAuthorized");

    checkSession(req.params.token).then(result => {
        if (result !== 1) return res.send("Invalid Token");
        sessionStore.del(req.params.token, (err, resp) => {
            if (!err) return res.send("logout");
        })
    }).catch(err => {
    });
};

module.exports = logOutFunc;