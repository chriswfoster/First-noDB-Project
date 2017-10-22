import React, { Component } from 'react';
import axios from "axios";
import Search from './components/Search'
import Navbar from './components/Navbar'
import Visitgiphy from './components/Visitgiphy'
import './myBg.jpg'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: "", gif1: "", gif2: "", gif3: "", gif4: "", gif5: "", gif6: "", gif7: "", gif8: "", gif9: "", gif10: ""
    }
    
    
    this.getImageURL=this.getImageURL.bind(this);
  }
componentDidMount(){
  axios.get("http://api.giphy.com/v1/gifs/search?q=poop&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=10")
        .then(response => {
          //console.log(response.data.data[0].id)
          // console.log(this.state.gif1)
          this.setState({gif1: "https://i.giphy.com/" + response.data.data[0].id + ".gif"})
          this.setState({gif2: "https://i.giphy.com/" + response.data.data[1].id + ".gif"})
          this.setState({gif3: "https://i.giphy.com/" + response.data.data[2].id + ".gif"})
          this.setState({gif4: "https://i.giphy.com/" + response.data.data[3].id + ".gif"})
          this.setState({gif5: "https://i.giphy.com/" + response.data.data[4].id + ".gif"})
          this.setState({gif6: "https://i.giphy.com/" + response.data.data[5].id + ".gif"})
          this.setState({gif7: "https://i.giphy.com/" + response.data.data[6].id + ".gif"})
          this.setState({gif8: "https://i.giphy.com/" + response.data.data[7].id + ".gif"})
          this.setState({gif9: "https://i.giphy.com/" + response.data.data[8].id + ".gif"})
          this.setState({gif10: "https://i.giphy.com/" + response.data.data[9].id + ".gif"})


  })
}

getImageURL(num){
  var disArray = [this.state.gif1, this.state.gif2, this.state.gif3, this.state.gif4, this.state.gif5, this.state.gif6, this.state.gif7, this.state.gif8, this.state.gif9, this.state.gif10]
  return disArray[num-1]
}

  render() {
  
    return (
      <div className="background-Color">
      
        <div className="navBar">
        <Navbar />
        <Visitgiphy />
        <Search />
        </div>

<div className="imageDivider">
      <div className="imageFlex"> 
      <img src={this.getImageURL(1)} className="imageTile"/>
      <img src={this.getImageURL(2)} className="imageTile"/>
      <img src={this.getImageURL(3)} className="imageTile"/>
      <img src={this.getImageURL(4)} className="imageTile"/>
      <img src={this.getImageURL(5)} className="imageTile"/>
      </div>
       
        <div className="imageFlex"> 
      <img src={this.getImageURL(6)} className="imageTile"/>
      <img src={this.getImageURL(7)} className="imageTile"/>
      <img src={this.getImageURL(8)} className="imageTile"/>
      <img src={this.getImageURL(9)} className="imageTile"/>
      <img src={this.getImageURL(10)} className="imageTile"/>
        </div>
</div>   
        

      </div>
    );
  }
}

export default App;
