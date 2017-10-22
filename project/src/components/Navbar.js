import React, {Component} from 'react'
import './../App.css'

export default class Navbar extends Component{

constructor(){
    super()
    this.state ={
        color: "",
        finalColor: "red"
    }
}



render(){
    return(

<div>

    <div className="topLeft">
    <a href="https://codepen.io/chriswf/full/BwJVrm/" className="topLeftButton">Draw Tool</a>
        <a href="https://codepen.io/chriswf/full/dVJjBK/" className="topLeftButton">Draw 2.0</a>
    
    
    
    </div>







        </div>
    )
}








}
