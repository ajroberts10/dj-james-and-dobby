import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Packages.scss';

class Jumbotron extends Component {
    render() {
        return (
            <div id="packages" className="packages">
                <div className="container">
                    <h2 className="packages__title">Packages</h2>
                    <Carousel />
                </div>
            </div>
        );
    }
}

export default Jumbotron;
