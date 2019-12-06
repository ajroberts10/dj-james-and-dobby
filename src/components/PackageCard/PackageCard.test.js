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

    describe('Setting the selected prop', () => {
        describe('Setting selected to true', () => {
            const wrapper = mount(<PackageCard selected={true} />)
            it('should set the selected class to the package card', () => {
                expect(wrapper.find('.card').hasClass('packageCard--selected')).toEqual(true);
            });
        });

        describe('Setting selected to false', () => {
            const wrapper = mount(<PackageCard selected={false} />)
            it('should set the selected class to the package card', () => {
                expect(wrapper.find('.card').hasClass('packageCard--selected')).toEqual(false);
            });
        });
    });

    describe('The title prop', () => {
        describe('Setting the title prop to a value', () => {
            const wrapper = mount(<PackageCard title="test" />)
            it('should set the appropriate header classes containing the title', () => {
                expect(wrapper.find('.packageCard__header').hasClass('packageCard__header--test')).toEqual(true);
            });
        });

        describe('Not setting a title prop', () => {
            const wrapper = mount(<PackageCard />)
            it('should set the default header classes', () => {
                expect(wrapper.find('div').at(1).prop('className')).toEqual('card-header packageCard__header');
            });
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
