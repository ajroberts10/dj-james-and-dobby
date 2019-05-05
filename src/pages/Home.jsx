import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="App">
                  <header className="App-header">
                    <Logo />
                    <p>
                      New website coming soon!
                    </p>
                  </header>
                </div>
            </div>
        );
    }
}

export default Home;
