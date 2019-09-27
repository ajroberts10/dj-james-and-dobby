import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

import './MenuItem.scss';

storiesOf('MenuItem', module)
    .add('single', () => <MenuItem text="Bronze Package" id="bronze"><p>This is some test text</p></MenuItem>)
    .add('multiple', () => {
        return (
            <div>
                <MenuItem text="Bronze Package" id="bronze"><p>This is some test text</p></MenuItem>
                <MenuItem text="Silver Package" id="silver"><p>This is some test text</p></MenuItem>
            </div>
        )
    });

