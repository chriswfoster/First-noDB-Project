import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(){
        super()
            this.state = {
                searchTerm: '',
                userResults: []
            }
    }

    search(e){
e.preventDefault()
    const {searchTerm} = this.state
    axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=5`)
    }



}
export default Search;