import React, { Component } from 'react';

import EnquireButton from '../../components/EnquireButton/EnquireButton';
import './PackageCard.scss';

class PackageCard extends Component {
    render() {
        const { id, title, price, children, packageImages } = this.props;
        const href = `#${id}`;
        return (
            <div className="card packageCard">
                <div className="packageCard__body">
                    <div id={id} className="carousel slide card-img-top" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            {packageImages && packageImages.map((url, index) => {
                                const classes = index === 0 ? 'carousel-item active' : 'carousel-item';
                                return (
                                    <div key={index} className={classes}>
                                        <img src={url} className="d-block w-100" alt="..." />
                                    </div>
                                )
                            })}
                        </div>
                        <a className="carousel-control-prev" href={href} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={href} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="packageCard__content">
                        <h4 className="packageCard__content-title display-4">{title}</h4>
                        <div className="packageCard__content-body">
                            {children}
                        </div>
                        <div className="packageCard__enquire">
                            <EnquireButton />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <p className="packageCard__price">£{price}</p>
                </div>
            </div>

        )
    }

};

export default PackageCard;
