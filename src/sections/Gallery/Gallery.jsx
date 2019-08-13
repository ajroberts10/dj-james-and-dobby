import React, { Component } from 'react';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import './Gallery.scss';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="container">
                    <PhotoGrid />
                </div>
            </div>
        );
    }
}

export default Gallery;
