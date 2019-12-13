import React, { Component } from 'react';
import PromoCard from '../../components/PromoCard/PromoCard';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <PromoCard />
                {/* <HomeButtons /> */}
            </div>
        );
    }
}

export default Home;
