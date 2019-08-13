import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Gallery from '../sections/Gallery/Gallery';

class GalleryPage extends Component {
    render() {
        return (
            <Layout>
                <Gallery />
            </Layout>
        );
    }
}

export default GalleryPage;
