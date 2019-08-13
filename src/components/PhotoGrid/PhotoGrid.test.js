import React from 'react';
import { mount } from 'enzyme';
import Instafeed from 'instafeed.js';
import PhotoGrid from './PhotoGrid';





describe('The PhotoGrid component', () => {


    jest.mock('instafeed.js', () => {
        return jest.fn().mockImplementation(() => {
            return {run: () => {
                data: [
                    {
                        likes: {count: 4},
                        id: '123345',
                        images: {
                            standard_resolution: {
                                height: 640,
                                url: "https://scontent.cdninstagram.com/vp/1cd6a73ca5a62c0c75a45217a056d99f/5D4694B3/t51.2885-15/sh0.08/e35/s640x640/66287428_471792606979609_4457083399960868818_n.jpg?_nc_ht=scontent.cdninstagram.com",
                                width: 640
                            }
                        }
                    }
                ]
            }};
      })
    });

    const wrapper = mount(<PhotoGrid />);

    it('should render some photos', () => {
        // console.log(wrapper.debug());
        // expect(run).toHaveBeenCalledOnce();
    });
})
