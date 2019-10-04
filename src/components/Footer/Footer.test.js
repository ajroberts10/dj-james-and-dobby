import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('The Footer component', () => {
    const wrapper = mount(<Footer year={2019} />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render the correct tag using the year prop', () => {
        expect(wrapper.find('.footer__tag').text()).toEqual('© 2019 Adam Roberts, All rights reserved')
    });
});
