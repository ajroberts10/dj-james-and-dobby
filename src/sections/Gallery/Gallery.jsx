import React, { Component } from 'react';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import './Gallery.scss';

class Gallery extends Component {
    render() {
        return (
            <section className="page-section" id="gallery">
                <div className="container gallery">
                    <h2 className="packages__title text-center display-5">Gallery</h2>
                    <PhotoGrid />
                </div>
            </section>
        );
    }
}

export default Gallery;
