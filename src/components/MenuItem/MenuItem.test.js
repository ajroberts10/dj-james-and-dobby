import React from 'react';
import { mount } from 'enzyme';

import MenuItem from '../../components/MenuItem/MenuItem';

describe('The MenuItem component', () => {
    describe('rendering the component', () => {
        const wrapper = mount(<MenuItem />);
        it('should render successfully', () => {
            expect(wrapper.exists()).toEqual(true);
        })
    })
});
