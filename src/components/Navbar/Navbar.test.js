
import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('the Navbar component', () => {
    const wrapper = mount(<Navbar />);

    it('renders the Navbar', () => {
      expect(wrapper.find('.navbar').exists()).toEqual(true);
    });

    it('renders the 2 navbar links', () => {
        expect(wrapper.find('.nav-item').length).toEqual(5);
    })
});

