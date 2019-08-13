import React from 'react';
import { storiesOf } from '@storybook/react';
import BioCard from './BioCard';

import './BioCard.scss';

const props = {
    title: 'DJ James',

}

storiesOf('Biocard', module)
    .add('left', () => <div className="container"><BioCard position="left" {...props} /></div>)
    .add('right', () => <div className="container"><BioCard position="right" {...props} /></div>);

