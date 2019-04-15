import React, { Component } from 'react';
import logo from './logo.jpg';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            New website coming soon!
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
