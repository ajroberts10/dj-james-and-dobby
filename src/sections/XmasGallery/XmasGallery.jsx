import React, { Component } from "react";

import "./XmasGallery.scss";

class XmasGallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="container">
          <h1 className="gallery__title">Christmas Visits</h1>
          <p className="gallery__intro">
            This Christmas, DJ James & DJ Dobby become Santa and the Grinch.
            Make sure you book in early to avoid disappointment!
          </p>

          <p className="gallery__intro">
            Premium costumes mixed in with the DJ James & DJ Dobby wit and
            banter! We are also available for "Breakfast with Santa and the
            Grinch" for pubs, cafes and restaurants.
          </p>
          <p className="gallery__intro-bold">
            Send us a message using the form above or click{" "}
            <a
              className="gallery__link"
              href="https://www.facebook.com/DJJamesDJDobby/"
              target="__blank"
            >
              here
            </a>{" "}
            to drop us a message on Facebook.
          </p>
          <div class="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/0.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby xmas event"
              />

              <video
                src="https://res.cloudinary.com/musicandcolour/video/upload/v1668628540/xmas/1.mp4"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby xmas event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/2.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/5.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/4.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/8.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/9.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/10.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/11.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/12.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/12.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/13.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/14.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/6.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/16.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/15.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/17.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-3 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/20.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1668628536/xmas/21.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>
          </div>
          <p>
            Click{" "}
            <a
              className="gallery__link"
              href="https://www.instagram.com/djjamesdjdobby/?hl=en"
              target="__blank"
            >
              here
            </a>{" "}
            to check out more pics and videos from our Instagram profile
          </p>
        </div>
      </div>
    );
  }
}

export default XmasGallery;
