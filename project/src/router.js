
import React from "react";
import { Switch, Route } from "react-router-dom";

import App from './App.js';
import GiphyMain from './components/giphy/GiphyMain.js';


export default (
  <Switch>
    <Route component={ App } path="/" exact />
    <Route component={ GiphyMain } path="/GiphyMain" /> 
    
  </Switch>
)