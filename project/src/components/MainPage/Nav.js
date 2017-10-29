import React, {Component} from 'react'
import './../../App.css'
import {Link} from 'react-router-dom'


export default class Nav extends Component{






render(){
    return(
      
<div className="navbar">
<Link to="/"> Home </Link> 
<a href="#news">NotNews</a>
<div className="dropdown">
  <button className="dropbtn">Projects... 
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <Link to="/GiphyMain">Giphy Search</Link>
    <a href="https://codepen.io/chriswf/full/dVJjBK/">Draw Tool 1.0</a>
    <a href="https://codepen.io/chriswf/full/BwJVrm/">Draw Tool 2.0</a>
  </div>
</div> 
</div>




    )
}

}