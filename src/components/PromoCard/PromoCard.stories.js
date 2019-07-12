import React from 'react';
import { storiesOf } from '@storybook/react';
import PromoCard from './PromoCard';

import './PromoCard.scss';

storiesOf('PromoCard', module)
    .add('default', () => <div className="container"><PromoCard /></div>);
