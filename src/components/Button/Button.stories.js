import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import './Button.scss';

storiesOf('Button', module)
    .add('default', () => <Button text="Test Button" />);

