import React, { Component } from "react";
import "./Footer.scss";

const styles = {
  border: 0,
  margin: "auto",
};

class Footer extends Component {
  render() {
    const { year } = this.props;
    const tag = `© ${year} Adam Roberts, All rights reserved`;
    return (
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-6 footer-brand animated fadeInLeft">
            <h2>Location</h2>
            <div className="map-responsive">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151864.00691536453!2d-2.460152368498928!3d53.506426376853916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba654d3882eb1%3A0x2cc7d82221c68081!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1570193876744!5m2!1sen!2suk"
                frameBorder="0"
                style={styles}
                allowFullScreen=""
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
          <div className="col-md-3 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/DJJamesDJDobby/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/djjamesdjdobby/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://vm.tiktok.com/ZMLkuNkPm/">TikTok</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Contact</h4>
            <ul>
              <li>07851 956751</li>
              <li>07875 269526</li>
              <li>djjamesdjdobby@gmail.com</li>
            </ul>

            <p className="footer__tag">{tag}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
