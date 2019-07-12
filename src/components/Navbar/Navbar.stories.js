import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './Navbar';

import './Navbar.scss';

storiesOf('Navbar', module)
    .add('default', () => <Navbar />);

