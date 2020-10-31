import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="container">
                <h1 className="gallery__title">Gallery</h1>
                    <p className="gallery__intro">
                        Currently under construction!
                    </p>
                    <p>Click <a className="gallery__link" href="https://www.instagram.com/djjamesdjdobby/?hl=en" target="__blank">here</a> to check out our Instagram profile in the meantime</p>
                </div>
            </div>
        );
    }
}

export default Gallery;
