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
        <div>
          <NavBar/>
          {this.props.children}
        </div>
      )
    }
}

export default AppTemplate;
