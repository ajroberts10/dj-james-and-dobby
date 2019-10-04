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
                        tailored to suit your event. Why not try combining one
                        of the kids with some of our ad-ons to make your event
                        extra special!
                    </p>
                    <p>
                        <small className="kids__disclaimer">
                            Note: Prices may vary depending on distance to venue
                            and playing time
                        </small>
                    </p>
                    {/* <MenuItem text="Kids Party Package" id="kids"> */}
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
                    </PackageCard>
                    <div class="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="kids__sub-title">Videos</h1>
                            </div>
                            <div className="kids__video col-sm-12 col-lg-6">
                                <div className="video">
                                    <video
                                        src="https://res.cloudinary.com/musicandcolour/video/upload/v1570217127/kids/File_from_iOS.mp4"
                                        frameborder="0"
                                        allowfullscreen
                                        controls
                                    ></video>
                                </div>
                            </div>
                            <div className="kids__video col-sm-12 col-lg-6">
                                <div class="video">
                                    <video
                                        src="https://res.cloudinary.com/musicandcolour/video/upload/v1570220017/kids/File_from_iOS_2.mp4"
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
        );
    }
}

export default kids;
