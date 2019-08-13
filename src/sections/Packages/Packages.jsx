import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Packages.scss';

class Jumbotron extends Component {
    render() {
        return (
            <section className=" bg-light page-section" id="packages">
                <div className="container packages">
                    <Carousel />
                </div>
            </section>
        );
    }
}

export default Jumbotron;
