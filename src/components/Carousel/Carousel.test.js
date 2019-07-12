import React from 'react';
import { mount } from 'enzyme';
import Carousel from './Carousel';

describe('The Carousel Component', () => {
    const wrapper = mount(<Carousel />);
    describe('rendering the carousel', () => {
        it('should display correctly', () => {
            expect(wrapper.exists()).toEqual(true);
        });
    });
});
