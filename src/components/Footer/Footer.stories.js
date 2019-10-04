import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

import './Footer.scss';

storiesOf('Footer', module)
    .add('default', () => <Footer year="2019" />);

