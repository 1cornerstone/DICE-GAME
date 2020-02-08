
let Users = [
    {Username: "Computer", status: 'online', win: 1, lose: 0, isPlaying: 1},
    {Username: 'akintunde', status: 'online', win: 1, lose: 0, isPlaying: 0}

];

 const availableUsersFunc =(req,res)=>{
     return res.json(Users);
 };

 module.exports = availableUsersFunc;