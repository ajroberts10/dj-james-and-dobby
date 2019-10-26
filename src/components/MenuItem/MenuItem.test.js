import React from 'react';
import { mount } from 'enzyme';

import MenuItem from '../../components/MenuItem/MenuItem';

describe('The MenuItem component', () => {
    const wrapper = mount(<MenuItem id="1" text="a test"><p>a test div</p></MenuItem>);
    describe('rendering the component', () => {
        it('should render successfully', () => {
            expect(wrapper.exists()).toEqual(true);
        })
    });

    describe('setting the menu heading id', () => {
        it('should set the id based on the id prop', () => {
            expect(wrapper.find('a').prop('id')).toEqual('heading-1');
        });
    });

    describe('setting the menu href', () => {
        it('should set the href based on the id prop', () => {
            expect(wrapper.find('a').prop('href')).toEqual('#1');
        });
    });

    describe('setting the text', () => {
        it('should render the text from the text prop', () => {
            expect(wrapper.find('a').text()).toEqual('a test');
        });
    });

    describe('the card body', () => {
        it('should render any children as the card body', () => {
            expect(wrapper.find('.card-body').children().html()).toEqual('<p>a test div</p>');
        });
    });
});
