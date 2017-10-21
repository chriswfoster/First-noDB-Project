import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(){
        super()
            this.state = {
                searchTerm: [],
                userResults: '',
                baseUrl: 'http://api.giphy.com/v1/gifs/search?q=',
                api_key:`&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5`
            }
    }


getSearchLink(userinput){
  
   axios.put('localhost:3008/test', userinput)
    .then(response => {
        this.setState({userResults: response})
    })
    }

handleChange(val){
this.state.searchTerm[0]= val
console.log(this.state.searchTerm)
}

problemSolver(){

}


render(){
    return(
        <div>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} placeholder="SEARCH DAT GIF"></input>
            
            <button type="submit" onClick={() => this.getSearchLink(this.state.searchTerm)}> Search</button>
    </div>
    
    
    )
}


}
export default Search;