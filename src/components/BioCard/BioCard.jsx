import React, { Component } from 'react';

import './BioCard.scss';

class BioCard extends Component {
    render() {
        const { position } = this.props;
        return (
            <div className="container bioCard">
                <div className="row">
                    {position === 'left' && (
                        <div className="col-md-6 bioCard__image--left">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bioCard__image">
                                    <img src="https://image.ibb.co/f5Kehq/bio-image.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="col-md-6">
                        <div className="bioCard__content">
                            <h1 className="bioCard__content-heading display-4">DJ James</h1>
                            <hr />
                            <p className="lead">Factfile:</p>
                            <ul>
                                <li><b>Name: </b>DJ James</li>
                                <li><b>Age: </b>36</li>
                                <li><b>Likes to play: </b>Northen Soul, Motown, Disco, 80s, RnB, House, Garage, Hip Hop</li>

                            </ul>
                        </div>
                    </div>
                    {position === 'right' && (
                        <div className="col-md-6 bioCard__image--right">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bioCard__image">
                                    <img src="https://image.ibb.co/f5Kehq/bio-image.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BioCard;
