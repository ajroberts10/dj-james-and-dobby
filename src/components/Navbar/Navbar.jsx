import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import EnquireButton from '../../components/EnquireButton/EnquireButton';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">DJ James &amp; DJ Dobby</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/djs">About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown ">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Packages
                                </button>
                                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink className="dropdown-item bg-dark" to="/packages">Events</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item bg-dark" to="/packages/kids">Kids Parties</NavLink>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/packages">Packages</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/friends">Friends</NavLink>
                            </li>
                            <li className="nav-item nav-enquire">
                                <EnquireButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
