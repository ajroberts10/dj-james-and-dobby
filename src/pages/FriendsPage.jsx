import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Friends from '../sections/Friends/Friends';

class FriendsPage extends Component {
    render() {
        return (
            <Layout>
                <Friends />
            </Layout>
        );
    }
}

export default FriendsPage;
