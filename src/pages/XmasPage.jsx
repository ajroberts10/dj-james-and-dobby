import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import XmasGallery from "../sections/XmasGallery/XmasGallery";

class XmasPage extends Component {
  render() {
    return (
      <Layout>
        <XmasGallery />
      </Layout>
    );
  }
}

export default XmasPage;
