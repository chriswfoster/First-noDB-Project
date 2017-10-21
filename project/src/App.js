import React, { Component } from 'react';
import axios from "axios";
import Search from './components/Search'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      gif1: "",
      gif2: "",
      gif3: "",
      gif4: "",
      gif5: ""
    }
    this.getImageURL=this.getImageURL.bind(this);
  }
componentDidMount(){
  axios.get("http://api.giphy.com/v1/gifs/search?q=poop&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5")
        .then(response => {
          //console.log(response.data.data[0].id)
          // console.log(this.state.gif1)
          this.setState({gif1: "https://i.giphy.com/" + response.data.data[0].id + ".gif"})
          this.setState({gif2: "https://i.giphy.com/" + response.data.data[1].id + ".gif"})
          this.setState({gif3: "https://i.giphy.com/" + response.data.data[2].id + ".gif"})
          this.setState({gif4: "https://i.giphy.com/" + response.data.data[3].id + ".gif"})
          this.setState({gif5: "https://i.giphy.com/" + response.data.data[4].id + ".gif"})
        


  })
}

getImageURL(num){
  var disArray = [this.state.gif1, this.state.gif2, this.state.gif3, this.state.gif4, this.state.gif5]
  return disArray[num-1]
}

  render() {
  
  
    //const firstPic = this.state.gifs.map(cur => (<img src= {("https://giphy.com/gifs/" + "{cur.id}" + "/html5")} alt="" />))
    return (
      <div className="background-Color">
        

        <div className="imageFlex"> 
          <p>SEARCH HERE!!</p>
          <Search />
          
      <img src={this.getImageURL(1)} className="imageTile"/>
      <img src={this.getImageURL(2)} className="imageTile"/>
      <img src={this.getImageURL(3)} className="imageTile"/>
      <img src={this.getImageURL(4)} className="imageTile"/>
      <img src={this.getImageURL(5)} className="imageTile"/>
</div>
        
        

      </div>
    );
  }
}

export default App;
