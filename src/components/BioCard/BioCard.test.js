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
        });
    });

    describe('passing the position=right prop', () => {
        const wrapper = mount(<BioCard position="right" />);
        it('should render the image on the right', () => {
            expect(wrapper.find('.bioCard__image--right').exists()).toEqual(true);
            expect(wrapper.find('.bioCard__image--left').exists()).toEqual(false);
        });
    });

    describe('passing the title prop', () => {
        const wrapper = mount(<BioCard title="DJ James" />);
        it('should set the correct title', () => {
            expect(wrapper.find('.bioCard__content-heading').text()).toEqual('DJ James');
        });
    });

    describe('passing the name prop', () => {
        const wrapper = mount(<BioCard name="DJ James" />);
        it('should set the correct name', () => {
            expect(wrapper.find('li').at(0).text()).toEqual('Name: DJ James');
        });
    });

    describe('passing the age prop', () => {
        const wrapper = mount(<BioCard age="36" />);
        it('should set the correct age', () => {
            expect(wrapper.find('li').at(1).text()).toEqual('Age: 36');
        });
    });

    describe('passing the music prop', () => {
        const wrapper = mount(<BioCard music="dance, Motown" />);
        it('should set the correct music list', () => {
            expect(wrapper.find('li').at(2).text()).toEqual('Likes to play: dance, Motown');
        });
    });
})