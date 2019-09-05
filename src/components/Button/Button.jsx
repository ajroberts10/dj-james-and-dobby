import React, { Component } from 'react';

import './Button.scss';

class Button extends Component {
    render() {
        const { text, buttonClass, link } = this.props;
        const classes = `button btn ${buttonClass}`;
        return (
            <a className={classes} href={link}>{text}</a>
        )
    }
};

export default Button;
