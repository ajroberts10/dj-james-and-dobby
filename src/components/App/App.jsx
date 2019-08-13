import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Index from '../../pages/Index';



library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Index} />
          </div>
        </Router>
    );
  }
}

export default App;
