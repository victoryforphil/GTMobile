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
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Classes from './Components/Classes'
import BellSchedule from './Components/BellSchedule'

class GTMobile extends Component {




  render() {
    return (
  <NavBar />



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
