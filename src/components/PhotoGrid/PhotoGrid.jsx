import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './PhotoGrid.scss';

const feed = new Instafeed({
    get: 'user',
    userId: process.env.REACT_APP_INSTA_USER_ID,
    accessToken: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
    resolution: 'low_resolution',
    sortBy: 'most-recent',
    limit: 12,
    template: '<a class="photoGrid__item" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});

class PhotoGrid extends Component {
    componentWillMount() {
        feed.run();
    }
    render() {
        return (
            <div className="photoGrid">
                <div className="container">
                    <div id="instafeed"></div>
                </div>
            </div>
        );
    }
}

export default PhotoGrid;
