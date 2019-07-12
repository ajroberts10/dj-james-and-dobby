import React, { Component } from 'react';

import pdf from './pdf.png';
import './DocumentListItem.scss';

class DocumentListItem extends Component {
    render() {
        const { title, description, path, filename } = this.props;
        return (
            <a href={path} className="document-list-item media" target="_blank">
                <img src={pdf} className="align-self-center mr-3" alt="..."/>
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    <p class="lead">
                        {description}
                    </p>
                </div>
            </a>
        )
    }
}

export default DocumentListItem;


