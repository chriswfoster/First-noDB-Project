import React, {Component} from 'react';
import axios from 'axios';





class Search extends Component{
    constructor(){
        super()
            this.state = {
                searchTerm: ["test"],
                userResults: '',
                baseUrl: 'http://api.giphy.com/v1/gifs/search?q=',
                api_key:`&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5`
            }
    }


getSearchLink(userinput){


    axios.post(`localhost:3008/test`, this.state.searchTerm).then(response => 
    
    this.setState({userResult: response.data.results}));
    console.log(this.state.userResults);
    }
    

handleChange(val){
this.setState({searchTerm: val})

}

problemSolver(){

}


render(){
    return(
        <div className="searchBox">
            <p>SEARCH HERE!</p>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} placeholder="SEARCH DAT GIF"></input>
            
            <button type="submit" onClick={() => this.getSearchLink(this.state.searchTerm)}> Search</button>
    </div>
    
    
    )
}


}
export default Search;