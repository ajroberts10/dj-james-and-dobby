import React, { Component } from 'react';
import PromoCard from '../../components/PromoCard/PromoCard';
import HomeButtons from '../../components/HomeButtons/HomeButtons';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <PromoCard />
                <HomeButtons />
            </div>
        );
    }
}

export default Home;
