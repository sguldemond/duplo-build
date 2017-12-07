import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rotation from 'react-rotation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rotation className="rotation-img">
         <img src='images/1.jpg'/>
         <img src='images/2.jpg'/>
         <img src='images/3.jpg'/>
         <img src='images/4.jpg'/>
         <img src='images/5.jpg'/>
         <img src='images/6.jpg'/>
         <img src='images/7.jpg'/>
         <img src='images/8.jpg'/>
         <img src='images/9.jpg'/>
         <img src='images/10.jpg'/>
         <img src='images/11.jpg'/>
         <img src='images/12.jpg'/>
         <img src='images/13.jpg'/>
         <img src='images/14.jpg'/>
         <img src='images/15.jpg'/>
         <img src='images/16.jpg'/>
        </Rotation>
        <h1>Scroll mouse wheel inside image</h1>
      </div>
    );
  }
}

export default App;
