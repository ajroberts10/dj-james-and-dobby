
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('the Navbar component', () => {
    const wrapper = shallow(<Navbar />);

    it('renders the Navbar', () => {
      expect(wrapper.find('.navbar').exists()).toEqual(true);
    });

    it('renders the 7 navbar links', () => {
        expect(wrapper.find('.nav-item').length).toEqual(7);
    })
});

