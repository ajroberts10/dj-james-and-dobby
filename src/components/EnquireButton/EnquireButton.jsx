import React, { Component } from 'react';

import './EnquireButton.scss';

class EnquireButton extends Component {
    render() {
        const { size } = this.props;
        const classes = `enquireButton ${size} btn btn-primary btn-lg`;
        return (
            <button className={classes} href="#" role="button" data-toggle="modal" data-target="#contactModal">Enquire Now</button>
        )
    }
};

export default EnquireButton;
