import React, { Component } from 'react';

import './PackageCard.scss';

class PackageCard extends Component {
    render() {
        const { id, title, price, children } = this.props;
        const href = `#${id}`;
        return (
            <div className="card packageCard">
                <div className="packageCard__body">
                    <div id={id} className="carousel slide card-img-top" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="http://placehold.it/400x250/000/fff" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src="http://placehold.it/400x250/000/fff" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src="http://placehold.it/400x250/000/fff" className="d-block w-100" alt="..." />
                            </div>
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
                    {/* <img src="http://placehold.it/400x250/000/fff" className="card-img-top" alt="..." /> */}
                    <div className="packageCard__content">
                        <h4 className="packageCard__content-title display-4">{title}</h4>
                        <div className="packageCard__content-body">
                            {children}
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
