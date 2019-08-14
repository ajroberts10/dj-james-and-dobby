import React from 'react';
import { storiesOf } from '@storybook/react';
import PackageCard from './PackageCard';

import './PackageCard.scss';

storiesOf('PackageCard', module)
    .add('default', () => <PackageCard />);

