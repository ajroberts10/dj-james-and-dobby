import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <div>

                <Sticky enabled={true} innerZ={50}>
                    <Navbar />
                </Sticky>
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

export default Layout;
