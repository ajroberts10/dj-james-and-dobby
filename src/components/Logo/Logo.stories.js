import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

import './Logo.scss';

storiesOf('Logo', module)
    .add('default', () => <div className="container"><Logo /></div>);

