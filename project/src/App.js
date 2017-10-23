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
      search: "", gif1: "", gif2: "", gif3: "", gif4: "", gif5: "", gif6: "", gif7: "", gif8: "", gif9: "", gif10: "",
      something: "",
    }
    
    this.addThem = this.addThem.bind(this);
    this.getImageURL=this.getImageURL.bind(this);
  }

  


  addThem(info){
          this.setState({gif1: "https://i.giphy.com/" + info.data.data[0].id + ".gif"})
          this.setState({gif2: "https://i.giphy.com/" + info.data.data[1].id + ".gif"})
          this.setState({gif3: "https://i.giphy.com/" + info.data.data[2].id + ".gif"})
          this.setState({gif4: "https://i.giphy.com/" + info.data.data[3].id + ".gif"})
          this.setState({gif5: "https://i.giphy.com/" + info.data.data[4].id + ".gif"})
          this.setState({gif6: "https://i.giphy.com/" + info.data.data[5].id + ".gif"})
          this.setState({gif7: "https://i.giphy.com/" + info.data.data[6].id + ".gif"})
          this.setState({gif8: "https://i.giphy.com/" + info.data.data[7].id + ".gif"})
          this.setState({gif9: "https://i.giphy.com/" + info.data.data[8].id + ".gif"})
          this.setState({gif10: "https://i.giphy.com/" + info.data.data[9].id + ".gif"})
}

getImageURL(num){
  var disArray = [this.state.id, this.state.gif2, this.state.gif3, this.state.gif4, this.state.gif5, this.state.gif6, this.state.gif7, this.state.gif8, this.state.gif9, this.state.gif10]
  return disArray[num-1]
}

  render() {
  
    return (
      <div className="background-Color">
      
        <div className="navBar">
        <Navbar />
        <Visitgiphy />
        <Search answer={this.state.addThem}/>
        </div>

<div className="imageDivider">
      <div className="imageFlex"> 
      <img src={this.getImageURL(1)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(2)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(3)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(4)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(5)} className="imageTile" alt="No pic here yet"/>
      </div>
       
        <div className="imageFlex"> 
      <img src={this.getImageURL(6)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(7)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(8)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(9)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(10)} className="imageTile" alt="No pic here yet"/>
        </div>
</div>   
        <Bottombar />

      </div>
    );
  }
}

export default App;
