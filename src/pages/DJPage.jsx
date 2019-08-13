import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import DJs from '../sections/DJs/DJs';

class DJPage extends Component {
    render() {
        return (
            <Layout>
                <DJs />
            </Layout>
        );
    }
}

export default DJPage;
