import React, { Component } from "react";

import "./Gallery.scss";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="container">
          <h1 className="gallery__title">Gallery</h1>
          <p className="gallery__intro">A few pics from recent events</p>
          <div class="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_23.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_21.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_20.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_19.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_16.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_18.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_14.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_17.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />

              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_15.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_13.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="DJ James and DJ Dobby event"
              />
              <img
                src="https://res.cloudinary.com/musicandcolour/image/upload/v1645780337/dj/Image_from_iOS_22.jpg"
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

export default Gallery;
