import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from './Jumbotron';

it('renders the Jumbotron', () => {
  const wrapper = shallow(<Jumbotron />);
  expect(wrapper.find('.jumbotron').exists()).toEqual(true);
});
