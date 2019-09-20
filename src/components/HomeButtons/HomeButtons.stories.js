import React from 'react';
import { storiesOf } from '@storybook/react';
import HomeButtons from './HomeButtons';

import './HomeButtons.scss';

storiesOf('Homebuttons', module)
    .add('default', () => <HomeButtons />);

