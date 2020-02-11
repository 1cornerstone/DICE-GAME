const express = require('express'),
    helmet =require('helmet'),
    parser =require('body-parser'),
    cors = require('cors'),
    {check,validationResult} = require('express-validator'),
    app = express();

// const http = require('http').Server(app);
// const io = require("socket.io")(http);

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(helmet());
app.use(cors());
app.use(check());

app.use('/', require('./routes/usersActionRoute'));// route to user simple action
//app.use('/frontend') // route to User gameEvent


// io.on('connection', (http) => {
//
//     http.on('userjoin', (Username) => {
//
//         client.isUsernameUsed(Username).then( (response)=>{
//             client.Join(Username).then(result => {
//                 io.sockets.emit('onlineUsers',result)
//             }).catch(err => {console.log(err) })
//         })
//             .catch(err=>{ io.sockets.emit('usedUsername',"Username Already Used")})
//     })
//
//     http.on('Users',()=>{
//         client.Users().then( response =>{
//             io.sockets.emit('onlineUsers',response)})
//             .catch(err => {console.log(err) })
//     })
//
//     http.emit('pair',()=>{
//
//     })
//
// })
//

app.listen(3001, () => {console.log("server on")});




