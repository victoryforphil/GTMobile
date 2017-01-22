import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from "react-redux"
import Navigation from "./Navigation"
import store from "../store"
class Index extends Component {
  render() {
    return (
      <Provider store={store}>
      <Navigation/>
      </Provider>
    );
  }
}

export default Index;
