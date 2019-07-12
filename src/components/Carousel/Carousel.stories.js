import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './Carousel';

import './Carousel.scss';

storiesOf('Carousel', module)
    .add('default', () => <div className="container"><Carousel /></div>);

