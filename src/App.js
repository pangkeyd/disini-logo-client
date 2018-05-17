import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Redirect } from 'react-router'

import './assets/css/style.css'

import Main from './containers/Main'
import Profile from './containers/Profile'

class App extends Component {

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route { ...rest } render={(props) => (
        localStorage.getItem('qwerty') !== null
        ? <Component { ...props } />
        : <Redirect to="/" />
      )} />
    )

    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={ Main } />
            <PrivateRoute path="/profile" component={ Profile } />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
