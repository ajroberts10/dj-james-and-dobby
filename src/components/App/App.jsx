import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Home from '../../pages/Home';

library.add(faStroopwafel);
const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path={baseUrl + "/"} component={Home} />
          </div>
        </Router>
    );
  }
}

export default App;
