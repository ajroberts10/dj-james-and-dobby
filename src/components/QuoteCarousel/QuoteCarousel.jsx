import React, { Component } from 'react';
import './QuoteCarousel.scss';

class QuoteCarousel extends Component {
    render() {
        const { quotes } = this.props;
        return (
            <div className=" quoteCarousel carousel slide" data-ride="carousel">
                <div className="carousel-inner text-center carousel-fade">
                    {quotes && quotes.map((quote, index) => {
                        const classes = index === 0 ? 'carousel-item active' : 'carousel-item';
                        return (
                            <div className={classes} key={index}>
                                <div className="d-flex h-100 align-items-center justify-content-center">
                                    <span className="quoteCarousel__quote">"{quote}"</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default QuoteCarousel;
