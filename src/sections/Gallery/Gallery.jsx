import React, { Component } from 'react';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import './Gallery.scss';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="container">
                <h1 className="gallery__title">Gallery</h1>
                    <p className="gallery__intro">
                        Below are a few photos pulled from our instagram account. Please feel free to click through to our account, maybe even give us a like or a follow ; )
                    </p>

                    <p>Gallery powered by <img className="gallery__insta" src="https://res.cloudinary.com/musicandcolour/image/upload/v1570803063/kids/instagram-logo-name.png" alt="instagram"/></p>
                    <PhotoGrid />

                </div>
            </div>
        );
    }
}

export default Gallery;
