import React from 'react';
import { mount } from 'enzyme';
import PackageCard from './PackageCard';

describe('The PackageCard component', () => {
    const wrapper = mount(<PackageCard />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('Setting the title prop', () => {
        const wrapper = mount(<PackageCard title="Bronze Package" />)
        it('should render the title', () => {
            expect(wrapper.find('.packageCard__content-title').text()).toEqual('Bronze Package');
        });
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
    describe('Wrapping child components', () => {
        const wrapper = mount(<PackageCard><div><h1>This is a test</h1></div></PackageCard>)
        it('should render the children', () => {
            expect(wrapper.find('.packageCard__content-body').children().html()).toEqual('<div><h1>This is a test</h1></div>');
        });
    });
});
