import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('The Footer component', () => {
    const wrapper = mount(<Footer />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
