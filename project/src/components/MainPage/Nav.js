import React, {Component} from 'react'
import './../../App.css'
import {Link} from 'react-router-dom'


export default class Nav extends Component{






render(){
    return(
      
<div class="navbar">
<a href="#home">Home</a>
<a href="#news">NotNews</a>
<div class="dropdown">
  <button class="dropbtn">Projects... 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <Link to="/GiphyMain"><a href="#">Giphy Search</a></Link>
    <a href="#">Draw Tool 1.0</a>
    <a href="#">Draw Tool 2.0</a>
  </div>
</div> 
</div>




    )
}














}