import React, { Component } from "react";
import PackageCard from "../../components/PackageCard/PackageCard";
import MenuItem from "../../components/MenuItem/MenuItem";
import "./Kids.scss";
import adons from "../Packages/adons.json";
import { kidsParty } from "../../components/PackageCard/images";

class kids extends Component {
    render() {
        const tableWidth = { width: "80%" };
        return (
            <div className="kids">
                <div class="container">
                    <h1 className="kids__title">Kids Parties</h1>
                    <p className="kids__intro">
                        We have a number of different packages that can be
                        tailored to suit your event. Why not try combining our kids party package with some of our ad-ons to make your event
                        extra special!
                    </p>
                    <p>
                        <small className="kids__disclaimer">
                            Note: Prices may vary depending on distance to venue
                            and playing time
                        </small>
                    </p>
                    <PackageCard
                        id="bronze-images"
                        title="Bronze Package"
                        price="180"
                        packageImages={kidsParty}
                    >
                        <ul>
                            <li>Simple DJ set up with 2 speakers</li>
                            <li>Age appropriate playlist</li>
                            <li>Classic party games</li>
                            <li>Participation dances</li>
                        </ul>
                        <p>Why not try combining our kids party package with some of our fantastic <a className="kids__link" href="/packages">ad-ons</a>
                        </p>
                    </PackageCard>
                    <div class="container kids__section">
                        <div className="col-12 text-center">
                            <h1 className="kids__sub-title kids__sub-title--long">Popular Combos</h1>
                        </div>
                        <div className="row homeButtons__columns">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card kids__card">
                                    <div className="card-header">Kids party package with UV ad-on</div>
                                    <div className="card-body">
                                        <div class="video">
                                            <img
                                                src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,h_271,w_483/v1572006271/kids/Image_from_iOS_21.jpg"
                                                className="d-block w-100"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card kids__card">
                                    <div className="card-header">Kids party package with balloon modelling</div>
                                    <div className="card-body">
                                        <div class="video">
                                            <img
                                                src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,h_271,w_483/v1572006271/kids/7.jpg"
                                                className="d-block w-100"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container kids__section">
                        <div className="col-12 text-center">
                            <h1 className="kids__sub-title kids__sub-title--short">Videos</h1>
                        </div>
                        <div className="row homeButtons__columns">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card kids__card">
                                    <div className="card-header">Christmas Events</div>
                                    <div className="card-body">
                                        <div class="video">
                                            <video
                                                src="https://res.cloudinary.com/musicandcolour/video/upload/v1570217127/kids/File_from_iOS.mp4"
                                                frameborder="0"
                                                allowfullscreen
                                                controls
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card kids__card">
                                    <div className="card-header">Customised Sound & Lighting</div>
                                    <div className="card-body">
                                        <div class="video">
                                            <video
                                                src="https://res.cloudinary.com/musicandcolour/video/upload/v1570219031/kids/File_from_iOS_1.mp4"
                                                frameborder="0"
                                                allowfullscreen
                                                controls
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default kids;
