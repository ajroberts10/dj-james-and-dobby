import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://via.placeholder.com/640x360" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Package One</h5>
                            <p>Some awesome DJ package</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/640x360" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Package Two</h5>
                            <p>Some awesome DJ package</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/640x360" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Package Three</h5>
                            <p>Some awesome DJ package</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
