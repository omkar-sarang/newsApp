
import './App.css';
import Navbar from './Component/Navbar'
import React, { Component } from 'react'
import News from './Component/News';


export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar></Navbar>
       <News></News>
      </div> 
    )
  }
}



