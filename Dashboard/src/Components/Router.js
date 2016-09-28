
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
class Router extends Component{
  render(){
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="about" component={About}/>
          <Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
  }
}

export default Router;
