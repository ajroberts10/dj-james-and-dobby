import React from 'react';
import { mount } from 'enzyme';

import BioCard from './BioCard';

describe('The BioCard component', () => {
    const wrapper = mount(<BioCard />);
    it('should render successfully', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('passing the position=left prop', () => {
        const wrapper = mount(<BioCard position="left" />);
        it('should render the image on the left', () => {
            expect(wrapper.find('.bioCard__image--left').exists()).toEqual(true);
            expect(wrapper.find('.bioCard__image--right').exists()).toEqual(false);
        })
    });

    describe('passing the position=right prop', () => {
        const wrapper = mount(<BioCard position="right" />);
        it('should render the image on the right', () => {
            expect(wrapper.find('.bioCard__image--right').exists()).toEqual(true);
            expect(wrapper.find('.bioCard__image--left').exists()).toEqual(false);
        })
    });
})
