import React, {Component} from 'react'
import './../../App.css'
import {Link} from 'react-router-dom'


export default class Nav extends Component{






render(){
    return(
      
<div class="navbar">
<Link to="/App"> Home </Link> 
<a href="#news">NotNews</a>
<div class="dropdown">
  <button class="dropbtn">Projects... 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <Link to="/GiphyMain">Giphy Search</Link>
    <a href="https://codepen.io/chriswf/full/dVJjBK/">Draw Tool 1.0</a>
    <a href="https://codepen.io/chriswf/full/BwJVrm/">Draw Tool 2.0</a>
  </div>
</div> 
</div>




    )
}














}