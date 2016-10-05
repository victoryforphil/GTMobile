import React, { Component } from 'react';
import logo from './logo.svg';

import UserCheck from './Components/UserCheck';
import SignIn from "./Components/SignIn.js";
import { Router, Route, Link, browserHistory } from 'react-router'

import * as firebase from 'firebase';

import AppTemplate from "./Components/AppTemplate"
import SchoolEvents from "./Components/Pages/SchoolEvents"
import SchoolEvent from "./Components/Pages/SchoolEvent"


class App extends Component {
  state = {user: null}



  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={AppTemplate}>
            <Route path="events" component={SchoolEvents}/>
            <Route path="event/:eventId" component={SchoolEvent}/>
          </Route>
        </Router>
    );
  }
}

export default App;
