import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Packages.scss';

class Jumbotron extends Component {
    render() {
        return (
            <div className="packages">
                <div className="container">
                    <Carousel />
                </div>
            </div>
        );
    }
}

export default Jumbotron;
