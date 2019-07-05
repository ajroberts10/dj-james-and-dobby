import React from 'react';
import { shallow } from 'enzyme';
import Packages from './Packages';

it('renders the Jumbotron', () => {
  const wrapper = shallow(<Packages />);
  expect(wrapper.find('.jumbotron').exists()).toEqual(true);
});
