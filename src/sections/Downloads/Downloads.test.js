import React from 'react';
import { mount } from 'enzyme';
import Downloads from './Downloads';

describe('The Downloads section', () => {
    it('renders successfully', () => {
        const wrapper = mount(<Downloads />);
        expect(wrapper.find('.downloads').exists()).toEqual(true);
      });
});
