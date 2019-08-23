import React from 'react';
import { storiesOf } from '@storybook/react';
import QuoteCarousel from './QuoteCarousel';

import './QuoteCarousel.scss';

const quotes = ['test quote 1', 'test quote 2', 'test quote 3'];



storiesOf('QuoteCarousel', module)
    .add('default', () => <QuoteCarousel quotes={quotes} />);
