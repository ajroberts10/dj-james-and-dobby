import React from 'react';
import { storiesOf } from '@storybook/react';
import PackageCard from './PackageCard';
import { gold } from './images';

import './PackageCard.scss';

storiesOf('PackageCard', module)
    .add('default', () => (
        <PackageCard id="gold" title="Bronze Package" price="250" packageImages={gold}>
            <ul>
                <li>4.5hrs DJ Performance</li>
                <li>DJ booth</li>
                <li>2 speakers</li>
                <li>2 lights on podiums (choice of moving heads or rotospheres)</li>
                <li>Suitable for small venues and up to 100 guests</li>
                <li>Birthday parties, anniversaries, Christening/communion</li>
                <li>Set up time: 45mins</li>
                <li>Pack down time: 45mins</li>
            </ul>
        </PackageCard>

        )
    );

