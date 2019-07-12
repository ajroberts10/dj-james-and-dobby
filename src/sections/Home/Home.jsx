import React, { Component } from 'react';
import PromoCard from '../../components/PromoCard/PromoCard';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div id="home" className=" home jumbotron jumbotron-fluid">
                <div className="container">
                    <PromoCard />
                </div>
            </div>
        );
    }
}

export default Home;
