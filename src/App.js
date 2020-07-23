import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/about" component={AboutComp}/>

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
