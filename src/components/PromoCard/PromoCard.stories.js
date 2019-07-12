import React from 'react';
import { storiesOf } from '@storybook/react';
import PromoCard from './PromoCard';

import './PromoCard.scss';

const styles = {
    "background-color": "#e9ecef"
};

storiesOf('PromoCard', module)
    .add('default', () => <div style={styles}><div className="container" ><PromoCard /></div></div>);
