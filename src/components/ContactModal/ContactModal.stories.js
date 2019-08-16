import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactModal from './ContactModal';

import './ContactModal.scss';

storiesOf('ContactModal', module)
    .add('default', () => (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">
                Launch demo modal
            </button>
            <ContactModal />
        </div>

    )
);

