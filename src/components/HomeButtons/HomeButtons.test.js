import React from 'react';
import { mount } from 'enzyme';
import HomeButtons from './HomeButtons';


describe('The HomeButtons component', () => {
    describe('rendering', () => {
        const wrapper = mount(<HomeButtons />);
        it('should successfully render', () => {
            expect(wrapper.exists()).toEqual(true);
        });
    });
});
