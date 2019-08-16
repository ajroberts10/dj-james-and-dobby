import React from 'react';
import { mount } from 'enzyme';
import EnquireButton from './EnquireButton';

describe('The EnquireButton component', () => {
    const wrapper = mount(<EnquireButton />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('passing a size prop', () => {
        const wrapper = mount(<EnquireButton size="large" />)
        it('should render a large button', () => {
            expect(wrapper.childAt(0).hasClass('large')).toEqual(true);
        });
    });

    describe('not passing a size prop', () => {
        const wrapper = mount(<EnquireButton />)
        it('should render a regular button', () => {
            expect(wrapper.childAt(0).hasClass('large')).toEqual(false);
        });
    });
});
