import React, { Component } from 'react';

import './BioCard.scss';

class BioCard extends Component {
    render() {
        const { position, title, name, age, music, image } = this.props;
        return (
            <div className="container bioCard">
                <div className="row">
                    {position === 'left' && (
                        <div className="col-md-6 bioCard__image--left">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bioCard__image">
                                        <img src={require(`./${image}`)} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {position === 'right' && (
                        <div className="col-md-6 bioCard__image--mobile">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bioCard__image">
                                        <img src={require(`./${image}`)} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-md-6">
                        <div className="bioCard__content">
                            <h1 className="bioCard__content-heading display-4">{title}</h1>
                            <hr />
                            <ul className="bioCard__content-list">
                                <li><span className="bioCard__content-list-title">Name: </span>{name}</li>
                                <li><span className="bioCard__content-list-title">Age: </span>{age}</li>
                                <li><span className="bioCard__content-list-title">Likes to play: </span>{music}</li>
                            </ul>
                        </div>
                    </div>
                    {position === 'right' && (
                        <div className="col-md-6 bioCard__image--right">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bioCard__image">
                                        <img src={require(`./${image}`)} alt="image" />
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
