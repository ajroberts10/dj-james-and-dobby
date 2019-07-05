import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Packages from '../components/Packages/Packages';

import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>

                <Sticky enabled={true} innerZ={50}>
                    <Navbar />
                </Sticky>
                <div className="App">
                  <Jumbotron />
                  <Packages />
                </div>
            </div>
        );
    }
}

export default Home;
