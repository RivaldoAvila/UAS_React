import React, { useState } from 'react';
//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import ProdukComp from './Component/Fungsional/ProdukComp';
import { CartContext } from './CartContext';




function App() {

  const [value, setValue] = useState(0)
  return (
    <div className="App">
     <BrowserRouter>
     <CartContext.Provider value = {{value, setValue}} >
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutComp}/>
      <Route exact path="/produk" component={ProdukComp}/>
      


      </Switch>
      </CartContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
