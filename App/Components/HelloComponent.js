/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloComponent extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text> Hello o/ </Text>
        <Text> Hello o/ </Text>
        <Text> Hello o/ </Text>
      </View>
    );
  }
}

module.exports = HelloComponent;
