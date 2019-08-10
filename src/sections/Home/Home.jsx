import React, { Component } from 'react';
import PromoCard from '../../components/PromoCard/PromoCard';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="home">
                <div className="home">
                    <PromoCard />
                </div>
            </section>
        );
    }
}

export default Home;
