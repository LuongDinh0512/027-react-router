import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
export default class componentName extends Component {
  render() {
    return (
      <div> 
        <Nav/>  
        {/* <Home/>  */}
        {/* <News/>  */}
        <Contact/>
        <NewsDetail/>
        <Footer/>         
      </div>
    );
  }
}
