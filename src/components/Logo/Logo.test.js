import React from 'react';
import { mount } from 'enzyme';
import Logo from './Logo';

describe('The Logo', () => {
    it('should render the logo', () => {
        const wrapper = mount(<Logo />);
        expect(wrapper.exists()).toEqual(true);
    })
})
