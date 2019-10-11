import React, { Component } from "react";

import "./HomeButtons.scss";

const Button = ({ href, buttonText }) => (
    <a href={href} className="btn btn-primary">
        {buttonText}
    </a>
);

const iconStyle = { fontSize: "30px" };

class HomeButtons extends Component {
    render() {
        return (
            <div className="homeButtons" name="homeButtons">
                <div className="container">
                    <h3 className="homeButtons__section-title">Select an option below to browse packages</h3>
                    <div className="row homeButtons__columns">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card homeButtons__card">
                                <div className="card-header homeButtons__title homeButtons__title--kids">Kids Parties</div>
                                <img
                                    className="card-img-top homeButtons__card-image"
                                    src="https://res.cloudinary.com/musicandcolour/image/upload/v1568983181/wedding2_gfdxpy.png"
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <p className="card-text homeButtons__card-text">
                                        From £180
                                    </p>
                                </div>
                                <div className="card-footer homeButtons__card-footer">
                                    <Button href="/packages/kids" buttonText="View Kids Party Options" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card homeButtons__card">
                                <div className="card-header homeButtons__title homeButtons__title--weddings">Weddings</div>
                                <img
                                    className="card-img-top homeButtons__card-image"
                                    src="https://res.cloudinary.com/musicandcolour/image/upload/v1568982766/wedding1_vw7dve.png"
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <p className="card-text homeButtons__card-text">
                                        From £250
                                    </p>
                                </div>
                                <div className="card-footer homeButtons__card-footer">
                                    <Button href="/packages" buttonText="View Wedding Packages" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card homeButtons__card">
                                <div className="card-header homeButtons__title homeButtons__title--functions">Birthdays</div>
                                <img
                                    className="card-img-top homeButtons__card-image"
                                    src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,h_180,w_344/v1568982198/IMG_0969_wxjlal.jpg"
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <p className="card-text homeButtons__card-text">
                                        From £250
                                    </p>
                                </div>
                                <div className="card-footer homeButtons__card-footer">
                                    <Button href="/packages" buttonText="View Birthday Packages" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeButtons;
