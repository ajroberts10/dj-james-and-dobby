import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import Jumbotron from '../components/Jumbotron/Jumbotron';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="App">
                  <Jumbotron />
                  <header className="App-header">
                    <p>
                      Website Under Construction!
                    </p>
                  </header>
                </div>
            </div>
        );
    }
}

export default Home;
