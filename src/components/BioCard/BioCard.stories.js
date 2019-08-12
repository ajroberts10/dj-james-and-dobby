import React from 'react';
import { storiesOf } from '@storybook/react';
import BioCard from './BioCard';

import './BioCard.scss';

storiesOf('Biocard', module)
    .add('left', () => <div className="container"><BioCard position="left" /></div>)
    .add('right', () => <div className="container"><BioCard position="right" /></div>);

