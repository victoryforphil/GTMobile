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
import * as firebase from 'firebase';
class GTMobile extends Component {

  constructor(){
    super();
    const config = {

      apiKey: "AIzaSyA1vGSYU6O0rB3QcMJyUk5vscR-fzCWBVc",
      authDomain: "gtmobile-2758e.firebaseapp.com",
      databaseURL: "https://gtmobile-2758e.firebaseio.com",
      storageBucket: "gtmobile-2758e.appspot.com",
      messagingSenderId: "697096842426"
    };
    firebase.initializeApp(config);
  }


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
