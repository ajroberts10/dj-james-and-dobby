import React, { Component } from 'react';

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './MenuItem.scss';

class MenuItem extends Component {
    render() {
        const { id, text, children } = this.props;
        const href = `#${id}`;
        const headingId = `heading-${id}`;
        return (
            <div className="card menuItem">
            <h5 className="card-header menuItem__header">
                <a data-toggle="collapse" href={href} aria-expanded="true" aria-controls="collapse-example" id={headingId} className="d-block collapsed">
                <FontAwesomeIcon icon={faChevronDown} />
                    {text}
                </a>
            </h5>
            <div id={id} className="collapse" aria-labelledby="heading-example">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
        )
    }
};

export default MenuItem;
