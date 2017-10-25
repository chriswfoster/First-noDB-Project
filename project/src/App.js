import React, { Component } from 'react';
// import axios from "axios";

import Topsection from './components/MainPage/Topsection'
import Nav from './components/MainPage/Nav'
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
   
    <div>
    
      <Nav />
      <Topsection />

       </div>
        
        

      
    );
  }
}

export default App;
