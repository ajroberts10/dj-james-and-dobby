import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../sections/Home/Home';
import Packages from '../sections/Packages/Packages';
import Gallery from '../sections/Gallery/Gallery';
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
                  <Gallery />
                  <Downloads />
                </div>
            </div>
        );
    }
}

export default Home;
