import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactModal from '../ContactModal/ContactModal';

import './Layout.scss';
const year = new Date().getFullYear();

class Layout extends Component {
    render() {
        return (
            <div>

                <Sticky enabled={true} innerZ={50}>
                    <Navbar />
                </Sticky>
                <ContactModal />
                { this.props.children }
                <Footer year={year} />
            </div>
        );
    }
}

export default Layout;
