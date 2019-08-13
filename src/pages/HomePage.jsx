import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Jumbotron from '../sections/Home/Home';

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Jumbotron />
            </Layout>
        );
    }
}

export default HomePage;
