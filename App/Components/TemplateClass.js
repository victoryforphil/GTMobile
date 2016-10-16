import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavBar from "./NavBar"

class Home extends Component {
  render() {
    return (
      <NavBar nav={this.props.nav}>
        <Text>Home</Text>
      </NavBar>
    );
  }
}
d
export default Home;
