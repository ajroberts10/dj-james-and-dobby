import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link
                        className="navbar-brand"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        DJ James &amp; DJ Dobby
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="packages"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >
                                    Packages
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
