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
    let val1 = userinput;
    console.log (val1)
    axios.put(`http://localhost:3008/${this.props.params.id}`, val1).then(response => 
    
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
        <div>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} placeholder="SEARCH DAT GIF"></input>
            
            <button type="submit" onClick={() => this.getSearchLink(this.state.searchTerm)}> Search</button>
    </div>
    
    
    )
}


}
export default Search;