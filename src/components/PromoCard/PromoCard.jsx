import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel';
import quotes from './quotes';
import './PromoCard.scss';

class PromoCard extends Component {
    render() {
        return (
            <div className="promoCard jumbotron jumbotron-fluid">
                <div className="container promoCard__container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <Logo />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 promoCard__content">
                            <div className="promoCard__content-header">
                                <h1 className="promoCard__heading featurette-heading">Professional Event DJs</h1>
                                <hr className="my-4" />
                                <QuoteCarousel quotes={quotes} />
                                <NavLink className="btn btn-primary btn-lg promoCard__button" to="/packages">
                                    Find Out More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoCard;
