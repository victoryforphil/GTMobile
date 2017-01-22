import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'
import React, {Component} from 'react';
import {FlatButton,AppBar} from 'material-ui';
class NavBar extends Component {
  render() {
    return (
      <AppBar
        title="GT Mobile"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={
          <div>
            <FlatButton href="/" label="Home"/>
            <FlatButton href="/events" label="Events" />
            <FlatButton href="/events" label="Polls" />
            <FlatButton href="/bells" label="Bells" />
          </div>
        }
      />
    )
    }
}
export default NavBar;
