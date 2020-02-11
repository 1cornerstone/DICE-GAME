

module.exports.Account = (req,res)=>{

    if (req.param.token === null) return res.send('unAuthorized')
};