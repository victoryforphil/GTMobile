import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'

import React, {Component} from 'react';
import NavBar from "./NavBar"
class AppTemplate extends Component {
    render() {
      return(
        <div >
          <NavBar/>
          <div className="container">
          {this.props.children}
        </div>
        </div>
      )
    }
}

export default AppTemplate;
