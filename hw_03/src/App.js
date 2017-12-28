import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appl from './Buttons';
import Colors from './Colors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Happy New Year!</h1>
        <Appl init='0' />
        <Colors />
      </div>
    );
  }
}

export default App;