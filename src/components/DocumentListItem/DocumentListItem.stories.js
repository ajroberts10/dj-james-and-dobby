import React from 'react';
import { storiesOf } from '@storybook/react';
import DocumentListItem from './DocumentListItem';

import './DocumentListItem.scss';

const title1 = 'Public Liability Insurance Certificate';
const description1 = 'Click to download.';
const path1 = '/test.pdf';
const filename1 = 'pliCert';

storiesOf('DocumentListItem', module)
    .add('default', () => (
        <div className="container">
            <DocumentListItem title={title1} description={description1} path={path1} filename={filename1} />
        </div>)
    );
