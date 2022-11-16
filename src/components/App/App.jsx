import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../../pages/HomePage";
import DJPage from "../../pages/DJPage";
import PackagesPage from "../../pages/PackagesPage";
import GalleryPage from "../../pages/GalleryPage";
import KidsPage from "../../pages/KidsPage";
import XmasPage from "../../pages/XmasPage";
import FAQsPage from "../../pages/FAQsPage";
import FriendsPage from "../../pages/FriendsPage";

library.add(faQuoteLeft);
library.add(faQuoteRight);

ReactGA.initialize("UA-155075068-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/djs" component={DJPage} />
          <Route exact path="/packages" component={PackagesPage} />
          <Route path="/packages/kids" component={KidsPage} />
          <Route path="/packages/xmas" component={XmasPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/faqs" component={FAQsPage} />
          <Route path="/friends" component={FriendsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
