import React from 'react';
import { mount } from 'enzyme';
import Packages from './Packages';


describe('The Packages section', () => {
    const wrapper = mount(<Packages />);
    it('renders successfully', () => {
        expect(wrapper.find('.packages').exists()).toEqual(true);
    });

    it('renders the Carousel', () => {
        expect(wrapper.find('Carousel').exists()).toEqual(true);
    })
});
