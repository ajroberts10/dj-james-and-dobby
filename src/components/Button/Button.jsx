import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { text, buttonClass } = this.props;
        const classes = `button btn ${buttonClass}`;
        return (
            <button className={classes}>{text}</button>
        )
    }
};

export default Button;
