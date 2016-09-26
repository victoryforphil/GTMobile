/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './Components/DrawerContent.js';

import AppTemplate from "./Components/AppTemplate"

class GTMobile extends Component {



  renderScene(route, navigator) {
     return (<AppTemplate route={route} navigator={navigator}/>)
  }

  render() {
    return (
      <View style={{flex:1}}>

        <Navigator
        initialRoute={{name: 'Home'}}
        renderScene={this.renderScene.bind(this)} />
      </View>

    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
menu: {

},
});

AppRegistry.registerComponent('GTMobile', () => GTMobile);
