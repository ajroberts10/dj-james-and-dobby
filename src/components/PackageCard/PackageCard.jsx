import React, { Component } from "react";

import EnquireButton from "../../components/EnquireButton/EnquireButton";
import "./PackageCard.scss";

class PackageCard extends Component {
    render() {
        const { id, price, children, packageImages, title, selected } = this.props;
        const href = `#${id}`;
        const packageClasses = selected === true ? 'card packageCard packageCard--selected' : 'card packageCard';
        const headerClasses = title ? `card-header packageCard__header packageCard__header--${title.toLowerCase()}` : `card-header packageCard__header`;
        return (
            <div className={packageClasses}>
                <div className={headerClasses}>
                    {title}
                </div>
                <div className="card-body packageCard__body">
                    <div className="packageCard__images">
                        <div
                            id={id}
                            className="carousel slide card-img-top"
                            data-ride="carousel"
                            data-interval="false"
                        >
                            <ol className="carousel-indicators">
                            {packageImages &&
                                    packageImages.map((url, index) => {
                                        const olClasses =
                                            index === 0
                                                ? "active"
                                                : "";
                                        return (
                                            <li key={index} data-target={href} data-slide-to={index} className={olClasses}></li>
                                        );
                                    })}
                            </ol>
                            <div className="carousel-inner">
                                {packageImages &&
                                    packageImages.map((url, index) => {
                                        const classes =
                                            index === 0
                                                ? "carousel-item active"
                                                : "carousel-item";
                                        return (
                                            <div
                                                key={index}
                                                className={classes}
                                            >
                                                <img
                                                    src={url}
                                                    className="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href={href}
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href={href}
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="packageCard__content card-body">
                        <p className="packageCard__price">£{price}</p>
                        <div className="packageCard__content-body card-text">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackageCard;
