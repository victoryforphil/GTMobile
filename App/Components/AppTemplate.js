import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavBar from "./NavBar";
import Home from "./Home"
class AppTemplate extends Component {

  getPage = () => {
    switch(this.props.route){
      case "Home":

      return (<Home/>)

      break;
    }
  }
  render() {
    return (
      <NavBar pageToDisplay={this.getPage} navigator={this.props.navigator}/>
    );
  }
}

export default NavBar;
