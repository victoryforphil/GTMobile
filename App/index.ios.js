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
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './Components/DrawerContent.js';
import Drawer from 'react-native-drawer'

class GTMobile extends Component {

  state = {
    drawerOpen: false
  }

  constructor(props){
    super(props);
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  };
  openDrawer = () => {
    this.setState({drawerOpen: true});
  };

  toggle = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  };

  componentDidMount(){
    this.closeDrawer();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        open={this.state.drawerOpen}
        type={"overlay"}
        content={<DrawerContent closeDrawer={this.closeDrawer}/>}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        acceptTap={true}
        styles={drawerStyles}

        >

        <Icon name="menu" size={30} style = {styles.button} onPress={this.toggle}>
  </Icon>

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
