import React, { Component } from 'react';
import logo from './logo.svg';

import UserCheck from './Components/UserCheck';
import SignIn from "./Components/SignIn.js";
import { Router, Route, Link, browserHistory } from 'react-router'

import * as firebase from 'firebase';

import AppTemplate from "./Components/AppTemplate"
import EventPage from "./Components/Pages/Events/EventPage"




class App extends Component {
  state = {user: null}


  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={AppTemplate}>
            <Route path="events" component={EventPage}/>
          </Route>
        </Router>
    );
  }
}

export default App;
