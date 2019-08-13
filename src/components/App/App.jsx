import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../../pages/HomePage';
import DJPage from '../../pages/DJPage';
import PackagesPage from '../../pages/PackagesPage';
import GalleryPage from '../../pages/GalleryPage';

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/djs" component={DJPage} />
            <Route path="/packages" component={PackagesPage} />
            <Route path="/gallery" component={GalleryPage} />
          </div>
        </Router>
    );
  }
}

export default App;
