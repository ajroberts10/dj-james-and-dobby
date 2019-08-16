import React from 'react';
import { storiesOf } from '@storybook/react';
import EnquireButton from './EnquireButton';

import './EnquireButton.scss';

storiesOf('EnquireButton', module)
    .add('default', () => <EnquireButton />)
    .add('large', () => <EnquireButton size="large" />);

