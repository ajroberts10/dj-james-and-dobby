import React from 'react';
import { storiesOf } from '@storybook/react';
import PhotoGrid from './PhotoGrid';

import './PhotoGrid.scss';

storiesOf('PhotoGrid', module)
    .add('default', () => <PhotoGrid />);
