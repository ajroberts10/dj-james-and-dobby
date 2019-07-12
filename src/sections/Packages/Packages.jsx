import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Packages.scss';

class Jumbotron extends Component {
    render() {
        return (
            <section className="page-section" id="packages">
                <div className="container packages">
                    <h2 className="packages__title text-center display-5">Packages</h2>
                    <Carousel />
                </div>
            </section>
        );
    }
}

export default Jumbotron;
