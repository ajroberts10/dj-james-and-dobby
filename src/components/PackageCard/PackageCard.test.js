import React from 'react';
import { mount } from 'enzyme';
import PackageCard from './PackageCard';

describe('The PackageCard component', () => {
    const wrapper = mount(<PackageCard />);
    it('should successfully render', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
