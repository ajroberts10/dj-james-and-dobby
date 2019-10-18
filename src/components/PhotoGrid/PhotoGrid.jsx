import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './PhotoGrid.scss';

const feed = new Instafeed({
    get: 'user',
    userId: process.env.REACT_APP_INSTA_USER_ID,
    accessToken: process.env.REACT_APP_INSTA_ACCESS_TOKEN,
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 12,
    template: '<div class="col-lg-3 gallery instaimg"><a href="{{link}}" target="_blank"><img src="{{image}}" class="img-fluid" /></a></div>'
});

class PhotoGrid extends Component {
    componentWillMount() {
        feed.run();
    }
    render() {
        return (
            <div className="photoGrid">
                <div className="container">
                    <div className="row" id="instafeed"></div>
                </div>
            </div>
        );
    }
}

export default PhotoGrid;
