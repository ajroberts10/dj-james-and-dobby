import React from 'react';
import { mount } from 'enzyme';
import PackageCard from './PackageCard';

const images = [
    './testImage1',
    './testImage2',
    './testImage3'
];

describe('The PackageCard component', () => {
    const wrapper = mount(<PackageCard />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('Setting the price prop', () => {
        const wrapper = mount(<PackageCard price="250" />)
        it('should render the price', () => {
            expect(wrapper.find('.packageCard__price').text()).toEqual('£250');
        });
    });

    describe('Setting the id prop', () => {
        const wrapper = mount(<PackageCard id="test" />)
        it('should use this id for the carousel controls', () => {
            expect(wrapper.find('.carousel').prop('id')).toEqual('test');
            expect(wrapper.find('.carousel-control-prev').prop('href')).toEqual('#test');
            expect(wrapper.find('.carousel-control-next').prop('href')).toEqual('#test');
        });
    });

    describe('Setting the packageImages prop', () => {
        const wrapper = mount(<PackageCard id="test" packageImages={images} />)
        it('should render the appropriate amount of images', () => {
            expect(wrapper.find('.carousel-item').length).toEqual(3);
        })

    });

    describe('Wrapping child components', () => {
        const wrapper = mount(<PackageCard><div><h1>This is a test</h1></div></PackageCard>)
        it('should render the children', () => {
            expect(wrapper.find('.packageCard__content-body').children().html()).toEqual('<div><h1>This is a test</h1></div>');
        });
    });
});
