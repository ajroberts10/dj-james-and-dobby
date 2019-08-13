import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../Navbar/Navbar';

import './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <div>

                <Sticky enabled={true} innerZ={50}>
                    <Navbar />
                </Sticky>
                <div className="page">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Layout;
