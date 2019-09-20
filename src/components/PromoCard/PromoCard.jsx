import React, { Component } from 'react';
import { Link } from 'react-scroll'

import Logo from '../Logo/Logo';
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel';
import quotes from './quotes';
import './PromoCard.scss';

const style = {
    'fontSize': '20px'
};

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
                                <hr className="my-4" />
                                <QuoteCarousel quotes={quotes} />
                                <Link
                                    activeClass="active"
                                    className="btn btn-primary btn-lg promoCard__button"
                                    to="homeButtons"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-40}
                                >
                                    Find Out More <span style={style}>&#128071;</span>
                                </Link>
                                {/* <button
                                    className="btn btn-primary btn-lg promoCard__button"
                                    href="#homeButtons"
                                    role="button"
                                >
                                    Find Out More <span style={style}>&#128071;</span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoCard;
