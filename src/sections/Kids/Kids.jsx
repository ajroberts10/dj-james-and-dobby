import React, { Component } from "react";
import {
  faClock,
  faMusic,
  faPlayCircle,
  faChild,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddonCarousel from "../../components/AddonCarousel/AddonCarousel";
import AddonPhotoCard from "../../components/AddonPhotoCard/AddonPhotoCard";
import PackageCard from "../../components/PackageCard/PackageCard";
import "./Kids.scss";
import { kidsParty } from "../../components/PackageCard/images";
import { addons } from "../../components/AddonPhotoCard/images";

class kids extends Component {
  render() {
    return (
      <div className="kids">
        <div class="container">
          <h1 className="kids__title">Kids Parties</h1>
          <div className="kids__intro">
            <p>
              We have a number of different packages that can be tailored to
              suit your event. Why not try combining our kids party package with
              some of our ad-ons to make your event extra special!
            </p>
            <small className="kids__disclaimer">
              Note: Prices may vary depending on distance to venue and playing
              time
            </small>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <PackageCard
                id="kids-images"
                title="Kids"
                price="180"
                packageImages={kidsParty}
              >
                <ul className="kids__cards-text">
                  <li className="kids__cards-text-item">
                    <FontAwesomeIcon
                      className="kids__cards-text-item-icon"
                      icon={faClock}
                    />
                    3hrs DJ Performance
                  </li>
                  <li className="kids__cards-text-item">
                    <FontAwesomeIcon
                      className="kids__cards-text-item-icon"
                      icon={faPlayCircle}
                    />
                    Simple DJ set up with 2 speakers
                  </li>
                  <li className="kids__cards-text-item">
                    <FontAwesomeIcon
                      className="kids__cards-text-item-icon"
                      icon={faChild}
                    />
                    Age appropriate playlist
                  </li>
                  <li className="kids__cards-text-item">
                    <FontAwesomeIcon
                      className="kids__cards-text-item-icon"
                      icon={faGift}
                    />
                    Classic party games
                  </li>
                  <li className="kids__cards-text-item">
                    <FontAwesomeIcon
                      className="kids__cards-text-item-icon"
                      icon={faMusic}
                    />
                    Participation dances
                  </li>
                </ul>
              </PackageCard>
            </div>
          </div>
          <div class="container kids__section">
            <div className="col-12 text-center">
              <h1 className="kids__sub-title kids__sub-title--long">
                Popular Add-ons
              </h1>
            </div>
            <p>
              See our{" "}
              <a className="kids__link" href="/packages">
                packages
              </a>{" "}
              page for individual add-on prices
            </p>
            <AddonCarousel>
              {addons.map((item) => (
                <AddonPhotoCard imageSrc={item.src} title={item.title} />
              ))}
            </AddonCarousel>
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
                  <div className="card-header">UV Confetti Cannon</div>
                  <div className="card-body">
                    <div class="video">
                      <video
                        src="https://res.cloudinary.com/musicandcolour/video/upload/v1581774595/File_from_iOS_1_ylzyhj.mov"
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
