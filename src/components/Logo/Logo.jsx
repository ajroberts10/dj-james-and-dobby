import React, { Component } from 'react';
import logo from './logo.png';

import './Logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} className="logo__image" alt="" />
            </div>
        );
    }
}

export default Logo;
