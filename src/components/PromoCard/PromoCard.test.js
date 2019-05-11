import React from 'react';
import { shallow } from 'enzyme';
import PromoCard from './PromoCard';

it('renders the PromoCard', () => {
  const wrapper = shallow(<PromoCard />);
  expect(wrapper.find('.promoCard').exists()).toEqual(true);
});
