import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import Drawer from 'react-native-drawer'
import DrawerContent from "./DrawerContent"
class NavBar extends Component {

    componentDidMount(){

    }
    closeDrawer = () => {
      this._drawer.close()

    };
    openDrawer = () => {
      this._drawer.open()
    };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type={"overlay"}
        content={<DrawerContent closeDrawer={this.closeDrawer} navigator={this.props.navigator}/>}
        openDrawerOffset={0.3}
        panCloseMask={.2}
        acceptTap={true}
        open={true}
        styles={drawerStyles}
        >
          {this.props.pageToDisplay}

        </Drawer>

    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#4d5966',backgroundColor:'#282a2e', shadowOpacity: 15, shadowRadius: 35 ,},
  main: {paddingLeft: 20, paddingTop: 50},
}
export default NavBar;
