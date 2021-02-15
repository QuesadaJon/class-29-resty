import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../../containers/LandingPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={LandingPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
