import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'
import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className = "navbar navbar-inverse" >
        <a className = "navbar-brand" href = "#" > GT Mobile </a>
      </nav>)
    }
}
export default NavBar;
