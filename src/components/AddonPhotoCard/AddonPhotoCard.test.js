import React from 'react';
import { mount } from 'enzyme';

import AddonPhotoCard from './AddonPhotoCard';

describe('The AddonPhotoCard component', () => {
    const wrapper = mount(<AddonPhotoCard />);
    it('should render successfully', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('passing an image src prop', () => {
        const wrapper = mount(<AddonPhotoCard imageSrc="test.com/image" />);
        it('should set the image src attribute', () => {
            expect(wrapper.find('.addonPhotoCard__image').prop('src')).toEqual('test.com/image');
        });
    });

    describe('passing a title prop', () => {
        const wrapper = mount(<AddonPhotoCard imageSrc="test.com/image" title="Test Addon" />);

        it('should set the card title', () => {
            expect(wrapper.find('.addonPhotoCard__title').text()).toEqual('Test Addon');
        });

        it('should set the img alt text as the title', () => {
            expect(wrapper.find('.addonPhotoCard__image').prop('alt')).toEqual('Test Addon');
        });
    });

})
