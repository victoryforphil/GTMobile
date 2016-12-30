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
      <nav>
        <div className="nav-wrapper blue">
          <a href="#" className="brand-logo">
            GT Mobile Dashboard
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down">
            <li>
              <Link to={`/events`}>Events</Link>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    )
    }
}
export default NavBar;
