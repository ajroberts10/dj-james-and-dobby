import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './PhotoGrid.scss';

const feed = new Instafeed({
    get: 'user',
    userId: process.env.REACT_APP_INSTA_USER_ID,
    template: '<a class="photoGrid__item" href="{{link}}" target="_blank"><img class="insta-image" src="{{image}}" /></a>',
    accessToken: process.env.REACT_APP_INSTA_ACCESS_TOKEN
});
feed.run()

class PhotoGrid extends Component {
    render() {
        return (
            <div className="photoGrid">
                <div id="instafeed"></div>
            </div>
        );
    }
}

export default PhotoGrid;
