import React, { Component } from 'react';
import PromoCard from '../PromoCard/PromoCard';
import './Jumbotron.scss';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <PromoCard />
                </div>
            </div>
        );
    }
}

export default Jumbotron;
