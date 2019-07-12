import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';


describe('The Home section', () => {
    const wrapper = mount(<Home />);
    it('renders successfully', () => {
        expect(wrapper.find('.home').exists()).toEqual(true);
    });

    it('renders the PromoCard', () => {
        expect(wrapper.find('PromoCard').exists()).toEqual(true);
    })
});
