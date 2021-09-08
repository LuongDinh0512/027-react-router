import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

export default class componentName extends Component {
  render() {
    return (
      <div> 
        <Nav/>  
        <Home/> 
        <Footer/> 
      </div>
    );
  }
}
