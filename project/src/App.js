import React, { Component } from 'react';
// import axios from "axios";

import Topsection from './components/MainPage/Topsection'
import Nav from './components/MainPage/Nav'
import './App.css';
import router from './router'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
      something: ""
    }
  }

  

  render() {
  
    return (
   
    <div>
    <div>
      <Nav />
      {router}
      </div>
      <Topsection />

       </div>
        
        

      
    );
  }
}

export default App;
