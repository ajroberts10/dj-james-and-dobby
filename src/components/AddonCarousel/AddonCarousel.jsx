import React, { Component } from "react";
import Slider from "react-slick";

import './AddonCarousel.scss';

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

class AddonCarousel extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="addonCarousel">
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        );
    }
}

export default AddonCarousel;
