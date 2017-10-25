import React, {Component} from 'react';
import axios from 'axios';





class Search extends Component{
    constructor(){
        super()
            this.state = {
                searchTerm: '',
                userResults: '',
                search: "", gif1: "", gif2: "", gif3: "", gif4: "", gif5: "", gif6: "", gif7: "", gif8: "", gif9: "", gif10: "",
            }
    this.getSearchLink = this.getSearchLink.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addThem=this.addThem.bind(this)
        }


getSearchLink(userinput){
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=10`).then(response => {
     this.addThem(response.data.data)
    })
}

handleChange(val){
this.setState({searchTerm: val})
}

addThem(infoz){
    this.setState({gif1: "https://i.giphy.com/" + infoz[0].id + ".gif"})
    this.setState({gif2: "https://i.giphy.com/" + infoz[1].id + ".gif"})
    this.setState({gif3: "https://i.giphy.com/" + infoz[2].id + ".gif"})
    this.setState({gif4: "https://i.giphy.com/" + infoz[3].id + ".gif"})
    this.setState({gif5: "https://i.giphy.com/" + infoz[4].id + ".gif"})
    this.setState({gif6: "https://i.giphy.com/" + infoz[5].id + ".gif"})
    this.setState({gif7: "https://i.giphy.com/" + infoz[6].id + ".gif"})
    this.setState({gif8: "https://i.giphy.com/" + infoz[7].id + ".gif"})
    this.setState({gif9: "https://i.giphy.com/" + infoz[8].id + ".gif"})
    this.setState({gif10: "https://i.giphy.com/" + infoz[9].id + ".gif"})
}
getImageURL(num){
  var disArray = [this.state.gif1, this.state.gif2, this.state.gif3, this.state.gif4, this.state.gif5, this.state.gif6, this.state.gif7, this.state.gif8, this.state.gif9, this.state.gif10]
  return disArray[num-1]
}

render(){
    return(
        <div className="centerIt">
        <div className="searchBox">
            <p>SEARCH HERE!</p>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} placeholder="SEARCH DAT GIF"></input>
            
            <button type="submit" onClick={() => this.getSearchLink(this.state.searchTerm)}> Search</button>
            </div>
        <div className="imageDivider">
      <div className="imageFlex"> 
      <img src={this.getImageURL(1)} className="imageTile" alt="Search for pics!"/>
      <img src={this.getImageURL(2)} className="imageTile" alt="Search for pics!"/>
      <img src={this.getImageURL(3)} className="imageTile" alt="Search for pics!"/>
      <img src={this.getImageURL(4)} className="imageTile" alt="Search for pics!"/>
      <img src={this.getImageURL(5)} className="imageTile" alt="Search for pics!"/>
      </div>
       
        <div className="imageFlex"> 
      <img src={this.getImageURL(6)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(7)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(8)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(9)} className="imageTile" alt="No pic here yet"/>
      <img src={this.getImageURL(10)} className="imageTile" alt="No pic here yet"/>
        </div>
</div>   
    </div>
    
    
    )
}


}
export default Search;