import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Register from './component/register'
import Login from './component/Login'
import Dashboard from './component/dashboard'
import  Home from './component/Home'
import  Wallet from './component/wallet'
import  Game from './component/singleplayer'
import  Game2 from './component/multiplayer'
import  List from './component/onlineUserList'
import  Profile from './component/profile'
import  Footer from './component/footer'
import Navbar from "./component/Navbar";
import {Container} from "@material-ui/core";

function App() {
  return (
     <div >
         <Navbar/>
         <Container  >

             <BrowserRouter>
                 <Route path='/home' component={Home} />
                 <Route path='/signup' component={Register} />
                 <Route path='/login' component={Login} />
                 <Route path='/dashboard' component={Dashboard} />
                 <Route path='/singlePlayer' component={Game} />
                 <Route path='/multiPlayer' component={Game2} />
                 <Route path='/list' component={List} />
                 <Route path='/wallet' component={Wallet} />
                 <Route path='/profile' component={Profile} />
             </BrowserRouter>
         </Container>
         <Footer/>
     </div>

  );
}

export default App;
