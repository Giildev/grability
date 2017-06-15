import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Link
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Grability</h2>
        </div>
        <div className="App-intro">
          <h1>Select</h1>
        </div>
        <Link to="/marvel" className="btn blue">
          Marvel Challenge
        </Link>
        <Link to="/refactoring" className="btn blue">
          Code Refactoring
        </Link>
        <Link to="/questions" className="btn blue">
          Questions
        </Link>
      </div>
    );
  }
}

export default App;
