import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator
} from 'react-native';

import Drawer from 'react-native-drawer'
import DrawerContent from "./DrawerContent"
import Classes from './Classes'
import Home from './Home'
class NavBar extends Component {
  onSelect (route){
    this.refs.navigator.push({
      name: route
    });
    this.closeDrawer();
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}

        content={<DrawerContent onSelect={this.onSelect}/>}
        openDrawerOffset={.4}
        panCloseMask={.2}
        acceptTap={true}
        open={true}
        styles={drawerStyles}>
        <Navigator
                    initialRoute={{name: 'Classes'}}
                    ref="navigator"
                    renderScene={this.renderScene} >

              </Navigator>

        </Drawer>

    );
  }
  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.name){
      case "Home":

      return (
        <Home navigator={navigator}/>

  )
  case "Classes":
  return(

    <Classes navigator={navigator}/>
 )
    }
  }

      componentDidMount(){
      }
      closeDrawer = () => {

        this._drawer.close()

      };
      openDrawer = () => {
        this._drawer.open()
      };



}

const drawerStyles = {
  drawer: { shadowColor: '#4d5966',backgroundColor:'#282a2e', shadowOpacity: 15, shadowRadius: 35 ,},
  main: {paddingLeft: 0, paddingTop: 0},
}
export default NavBar;
