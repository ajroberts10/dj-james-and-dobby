import React from 'react';
import { mount } from 'enzyme';

import AddonCarousel from './AddonCarousel';

describe('The AddonCarousel component', () => {
    const wrapper = mount(<AddonCarousel />);
    it('should render successfully', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    describe('rendering slides', () => {
        const wrapper = mount(<AddonCarousel>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
        </AddonCarousel>);

        it('should render a slide per div', () => {
            expect(wrapper.find('.slick-slide').length).toEqual(3);
        });
    });

})
