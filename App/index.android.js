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
  Alert
} from 'react-native';

import DrawerContent from './Components/DrawerContent.js';
import Drawer from 'react-native-drawer'

class GTMobile extends Component {


  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  componentDidMount(){
    this.closeDrawer();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<DrawerContent closeDrawer={this.closeDrawer}/>}
        openDrawerOffset={200}
        styles={drawerStyles}>
        <TouchableOpacity style={styles.button} onPress={this.openDrawer}>
        <Text> Open Drawer </Text>
        </TouchableOpacity>
      </Drawer>

    );
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#4d5966',backgroundColor:'#282a2e', shadowOpacity: 15, shadowRadius: 35 ,},
  main: {paddingLeft: 20, paddingTop: 50},
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
button: {
  backgroundColor: 'transparent',

},
});

AppRegistry.registerComponent('GTMobile', () => GTMobile);
