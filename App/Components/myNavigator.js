'use strict'
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
import DrawerContent from './DrawerContent';
import NavBar from './NavBar'
import Home from './Home'
import Classes from './Classes'

class myNavigator extends Component {


  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.name){
      case "Home":
      return (
        <Home
         {...globalNavigatorProps} />
  )
  case "Classes":
  return(
    <Classes
    {...globalNavigatorProps}
    person={route.person}/>
 )
    }
  }

  render() {
    return (


        <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigtor"
        renderScene={this.renderScene} />

      )  }



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

export default myNavigator;
