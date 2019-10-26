import React from 'react';
import { shallow } from 'enzyme';
import Sticky from 'react-stickynode';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactModal from '../ContactModal/ContactModal';
import Layout from './Layout';

describe('The Layout component', () => {
    const layout = shallow(<Layout />);
    it('should wrap the nav in a sticky node', () => {
        expect(layout.find(Sticky).exists()).toEqual(true);
    });

    it('should render the Navbar', () => {
        expect(layout.find(Navbar).exists()).toEqual(true);
    });

    it('should render the Footer', () => {
        expect(layout.find(Footer).exists()).toEqual(true);
    });

    it('should render the ContactModal', () => {
        expect(layout.find(ContactModal).exists()).toEqual(true);
    });
})
