import React, { Component } from 'react';
import logo from '../Logo/logo.jpg';
import './PromoCard.scss';

class PromoCard extends Component {
    render() {
        return (
            <div className="promoCard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <img src={logo} alt="Logo" className="promoCard__image" />
                        </div>
                        <div className="col-sm-6 col-md-6 promoCard__content">
                            <div className="promoCard__content-header">
                                <h2>DJ Services</h2>
                            </div>
                            <div className="promoCard__content-text">
                                <ul className="list-group list-group-flush promoCard__content-list">
                                    <li className="list-group-item promoCard__content-list-item">Weddings</li>
                                    <li className="list-group-item promoCard__content-list-item">Parties</li>
                                    <li className="list-group-item promoCard__content-list-item">Corporate Functions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoCard;
