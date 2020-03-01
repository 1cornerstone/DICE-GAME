import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Register from './component/register'
import Login from './component/Login'
import Dashboard from './component/dashboard'
import  Home from './component/Home'
import  Wallet from './component/wallet'
import  Game from './component/singleplayer'
import  Game2 from './component/multiplayer'
import Transactions from './component/transaction'
import  List from './component/onlineUserList'
import  Profile from './component/profile'
import  Footer from './component/footer'
import Navbar from "./component/Navbar";

function App() {
  return (
     <div >
         <Navbar/>
             <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/signup" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/game" component={Game} />
                    {/*<Route path="/multiPlayer" component={Game2} />*/}
                    <Route path="/players" component={List} />
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/transactions" component={Transactions} />
                    <Route path="/profile" component={Profile} />
                    <Redirect exact from="/" to='/home' />
                </Switch>
             </BrowserRouter>
         <Footer/>
     </div>

  );
}

export default App;
