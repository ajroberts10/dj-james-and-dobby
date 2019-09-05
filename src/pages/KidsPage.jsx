import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Packages from '../sections/Packages/Packages';

class PackagesPage extends Component {
    render() {
        return (
            <Layout>
                <Packages />
            </Layout>
        );
    }
}

export default PackagesPage;
