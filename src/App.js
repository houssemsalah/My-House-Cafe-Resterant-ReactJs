import './css/style.css';

import NavBar from './components/NavBar';
import './css/owl.carousel.min.css';

import React, { useState } from 'react';
import Footer from './components/Footer';
import {
  BrowserRouter, 
  Switch,
  Route
  
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "./components/Carrousel";
import Tables from './components/Tables';

import ItemAdd from './components/ItemAdd';
import Menu from './components/Menu';
import Acceuil from './components/Acceuil';
import Contact from './components/Contact';



 function App() {
   const [toggle, settoggle] = useState("pizza")
 
  return (
  
    <div className="App"style={{backgroundImage:' url(/images/bg_4.jpg)'}}>
      <NavBar/> 
      <Switch>
      <Route exact path='/'>
        <Carrousel/>
        <Acceuil/>
        </Route>
        <Route path='/Menu' component={Menu}/>
         
          <Route path='/Contact' component={Contact}/>
         
          <Route path='/Admin'>
          <Tables/>
          <ItemAdd/>
          </Route>
     
 </Switch>
      <Footer/>
      </div>
      
  );
}

export default App;
