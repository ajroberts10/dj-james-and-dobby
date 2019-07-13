import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './Gallery.scss';

const feed = new Instafeed({
    get: 'user',
    userId: process.env.REACT_APP_INSTA_USER_ID,
    template: '<a class="gallery__item" href="{{link}}" target="_blank"><img class="insta-image" src="{{image}}" /></a>',
    accessToken: process.env.REACT_APP_INSTA_ACCESS_TOKEN
});
feed.run()

class Gallery extends Component {
    render() {
        return (
            <section className="page-section" id="gallery">
                <div className="container gallery">
                    <h2 className="packages__title text-center display-5">Gallery</h2>
                    <div id="instafeed"></div>
                </div>
            </section>
        );
    }
}

export default Gallery;
