import React, { Component } from 'react';
// import axios from "axios";
import Search from './components/Search'
import Navbar from './components/Navbar'
import Visitgiphy from './components/Visitgiphy'
import Bottombar from './components/Bottombar'
import './myBg.jpg'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
      something: ""
    }
  }

  

  render() {
  
    return (
      <div className="background-Color">
      
        <div className="navBar">
        <Navbar />
        <Visitgiphy />
        
        </div>
        <Search />
        <Bottombar />

      </div>
    );
  }
}

export default App;
