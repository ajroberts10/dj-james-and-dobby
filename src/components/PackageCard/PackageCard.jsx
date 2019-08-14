import React, { Component } from 'react';

import './PackageCard.scss';

class PackageCard extends Component {
    render() {
        return (
            <div className="card packageCard">
                <div className="packageCard__body">
                    <img src="http://placehold.it/400x250/000/fff" className="card-img-top" alt="..." />
                    <div className="packageCard__content">
                        <h4 className="packageCard__content-title display-4">Bronze Package</h4>
                        <ul className="packageCard__content-body">
                            <li>4.5hrs DJ Performance</li>
                            <li>DJ booth</li>
                            <li>2 speakers</li>
                            <li>2 lights on podiums (choice of moving heads or rotospheres)</li>
                            <li>Suitable for small venues and up to 100 guests</li>
                            <li>Birthday parties, anniversaries, Christening/communion</li>
                            <li>Set up time: 45mins</li>
                            <li>Pack down time: 45mins</li>
                        </ul>
                    </div>
                </div>
                <div class="card-footer">
                    <p class="text-muted">£250</p>
                </div>
            </div>

        )
    }

};

export default PackageCard;
