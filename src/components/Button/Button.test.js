import React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

describe('the Button component', () => {
    describe('displaying the component', () => {
        const wrapper = shallow(<Button />);
        it('should render successfully', () => {
            expect(wrapper.exists()).toEqual(true);
        });
    });

    describe('passing a text prop', () => {
        const wrapper = shallow(<Button text="test button" />);
        it('should render the correct button text', () => {
            expect(wrapper.text()).toEqual('test button');
        });
    });

    describe('passing a buttonClass prop', () => {
        const wrapper = shallow(<Button buttonClass="test_class" />);
        it('should apply the correct class', () => {
            expect(wrapper.hasClass('test_class')).toEqual(true);
        });
    });

    describe('passing a link prop', () => {
        const wrapper = shallow(<Button link="/packages" />);
        it('should apply the correct href', () => {
            expect(wrapper.prop('href')).toEqual('/packages');
        });
    });
});
