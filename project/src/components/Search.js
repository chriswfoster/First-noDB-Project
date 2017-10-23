import React, {Component} from 'react';
import axios from 'axios';





class Search extends Component{
    constructor(){
        super()
            this.state = {
                searchTerm: '',
                userResults: ''
            }
    this.getSearchLink = this.getSearchLink.bind(this)
    this.handleChange = this.handleChange.bind(this)
        }


getSearchLink(userinput){
    axios.get(`http://localhost:3008/api/data?q=${this.state.searchTerm}`).then(response => {
    //  this.setState({userResults: response.data.data}),
     console.log(this.props.answer)})
}

handleChange(val){
this.setState({searchTerm: val})
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