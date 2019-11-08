import React from 'react';
import { mount } from 'enzyme';

import Packages from './Packages';


describe('The Packages section component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Packages />);
    });

    it('should update the price when a package is selected', () => {
        const radioButton = wrapper.find('#packageSelectSilver');
        radioButton.props().onChange({ target: { value: 200 } });
        expect(wrapper.find('.packages__price-value').text()).toEqual('Package Price: £200');
    });

    it('should update the price when an ad-on checkbox is selected', () => {
        const adonCheckbox = wrapper.find('#item-0');
        adonCheckbox.props().onChange({ target: { checked: true, value: 20 } });
        expect(wrapper.find('.packages__price-value').text()).toEqual('Package Price: £20');
    });

    it('should update the price when an ad-on checkbox and a package is selected', () => {
        const radioButton = wrapper.find('#packageSelectSilver');
        radioButton.props().onChange({ target: { value: 200 } });

        const adonCheckbox = wrapper.find('#item-0');
        adonCheckbox.props().onChange({ target: { checked: true, value: 20 } });

        expect(wrapper.find('.packages__price-value').text()).toEqual('Package Price: £220');
    });

    it('should subtract the ad-on price when an item is unselected', () => {
        const radioButton = wrapper.find('#packageSelectSilver');
        radioButton.props().onChange({ target: { value: 200 } });

        const adonCheckbox1 = wrapper.find('#item-0');
        const adonCheckbox2 = wrapper.find('#item-1');

        adonCheckbox1.props().onChange({ target: { checked: true, value: 20 } });
        adonCheckbox2.props().onChange({ target: { checked: true, value: 30 } });
        adonCheckbox1.props().onChange({ target: { checked: false, value: 20 } });

        expect(wrapper.find('.packages__price-value').text()).toEqual('Package Price: £230');
    });

});
