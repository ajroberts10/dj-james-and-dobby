import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../Logo/Logo';
import EnquireButton from '../../components/EnquireButton/EnquireButton';
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel';
import quotes from './quotes';
import './PromoCard.scss';

class PromoCard extends Component {
    render() {
        return (
            <div className="promoCard jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <Logo />

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 promoCard__content">
                            <div className="promoCard__content-header">
                                <h1 className="promoCard__heading featurette-heading">Professional Event DJs</h1>
                                <p className="lead promoCard__sub-heading">Private Functions | Large Scale Events | Festivals </p>
                                <hr className="my-4" />
                                <div className="promoCard__button">
                                    <EnquireButton size="large" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-12">
                            <QuoteCarousel quotes={quotes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoCard;
