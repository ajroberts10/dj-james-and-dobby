import React, { Component }from 'react';

import './AddonPhotoCard.scss';

class AddonPhotoCard extends Component {
    render() {
        const { imageSrc, title } = this.props;
        return (
            <div className="addonPhotoCard card">
                <img className="addonPhotoCard__image card-img-top" src={imageSrc} alt={title} />
                <div className="card-body">
                    <h5 className="addonPhotoCard__title card-title">{title}</h5>
                </div>
            </div>
         );
    }
}

export default AddonPhotoCard;
