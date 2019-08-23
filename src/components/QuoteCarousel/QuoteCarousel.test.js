import React from 'react';
import { mount } from 'enzyme';
import QuoteCarousel from './QuoteCarousel';

describe('The QuoteCarousel component', () => {
    it('renders the QuoteCarousel', () => {
      const wrapper = mount(<QuoteCarousel />);
      expect(wrapper.find('.quoteCarousel').exists()).toEqual(true);
    });

    describe('passing a quotes array as a prop', () => {
        const quotes = ['test quote 1', 'test quote 2', 'test quote 3'];
        const wrapper = mount(<QuoteCarousel quotes ={quotes} />);
        const carouselItems = wrapper.find('.carousel-item');

        it('should render the appropriate amount of carousel items', () => {
            expect(carouselItems.length).toEqual(3);
        });

        it('should set the first carousel slide to active', () => {
            expect(carouselItems.first().hasClass('active')).toEqual(true);
        });
    })
});

