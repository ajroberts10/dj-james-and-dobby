import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import HomePage from '../../pages/HomePage';
import DJPage from '../../pages/DJPage';
import PackagesPage from '../../pages/PackagesPage';
import GalleryPage from '../../pages/GalleryPage';
import KidsPage from '../../pages/KidsPage';
import FAQsPage from '../../pages/FAQsPage';
import FriendsPage from '../../pages/FriendsPage';

library.add(faQuoteLeft);
library.add(faQuoteRight);

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/djs" component={DJPage} />
            <Route exact path="/packages" component={PackagesPage} />
            <Route path="/packages/kids" component={KidsPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/faqs" component={FAQsPage} />
            <Route path="/friends" component={FriendsPage} />
          </div>
        </Router>
    );
  }
}

export default App;
