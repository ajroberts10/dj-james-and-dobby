import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../sections/Home/Home';
import Packages from '../sections/Packages/Packages';
import Downloads from '../sections/Downloads/Downloads';

import './Index.scss';

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
                  <Downloads />
                </div>
            </div>
        );
    }
}

export default Home;
