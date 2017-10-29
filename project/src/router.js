
import React from "react";
import { Switch, Route } from "react-router-dom";

import App from './App.js';
import GiphyMain from './components/giphy/GiphyMain.js';
import Topsection from './components/MainPage/Topsection'


export default (
  <Switch>
    <Route component={ Topsection } exact path="/"/>
    <Route component={ GiphyMain } path="/GiphyMain" /> 
   
    
  </Switch>
)
