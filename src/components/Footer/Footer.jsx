import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="footer-bs">
                    <div className="row">
                        <div className="col-md-6 footer-brand animated fadeInLeft">
                            <h2>Testimonials</h2>
                            <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                            <p>© 2019 Adam Roberts, All rights reserved</p>
                        </div>
                        <div className="col-md-3 footer-social animated fadeInDown">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-ns animated fadeInRight">
                            <h4>Contact</h4>
                            07712 345678

                        </div>
                    </div>
                </footer>

            </div>
        )
    }

};

export default Footer;
