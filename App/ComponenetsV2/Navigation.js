import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator,
    BackAndroid
} from 'react-native';


import Drawer from 'react-native-drawer'
import DrawerContent from "./NavigationContent"

import HomePage from "./Home/HomePage.js"
import EventsPage from "./Events/EventsPage.js"
import EventsList from "./Events/EventsList.js"
import EventDetailPage from "./Events/EventDetailPage"
import PollsPage from "./Polls/PollsPage"
import PollDetailPage from "./Polls/PollDetailPage"
import BellSchedulePage from "./BellSchedule/BellSchedulePage"

class Navigation extends Component {

//TODO: Dont Navigate if already on Page

  constructor(){
    super();
    this.state = {
      currentPage: {}
    };

    this.navigateTo.bind(this);
    var self = this;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (self._nav.getCurrentRoutes().length === 1  ) {
        return false;
      }
      self._nav.pop();
      return true;
    });

  }

  render() {
    var self = this;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<DrawerContent onSelect={this.navigateTo.bind(this)}/>}
        openDrawerOffset={.4}
        panCloseMask={.2}
        panOpenMask={.2}
        acceptTap={true}
        open={true}
        styles={drawerStyles}>

        <Navigator

          initialRoute={{name: 'Home'}}
          ref={(ref) =>this._nav = ref}
          renderScene={this.renderScene} >
        </Navigator>

        </Drawer>

    );
  }

  openDrawer = () => {
    this._drawer.open()
  }

  navigateTo (route, data)  {

    if(this._nav){
      this._nav.push({
        name: route,
        data: data
      });
      this._drawer.close();
      //this.setState({currentPage: route})

    }

  }

  renderScene = (route, navigator) => {
    var globalNavigatorProps = { navigator }
    var self = this;

    if(true){
      switch(route.name){
        case "Home":
          return (<HomePage nav={this} /> )
        case "Events":
          return (<EventsPage nav={self} /> )
        case "EventDetailPage":
          return (<EventDetailPage nav={self} data={route.data}/> )
        case "Polls":
          return (<PollsPage nav={self }/> )
        case "PollDetailPage":
            return (<PollDetailPage nav={self } data={route.data}/> )
        case "BellSchedule":
            return (<BellSchedulePage nav={self }/> )
      }
    }
  }


    closeDrawer = () => {
    this._drawer.close()
  }





}

const drawerStyles = {
  drawer: { shadowColor: '#4d5966',backgroundColor:'#282a2e', shadowOpacity: 15, shadowRadius: 35 ,},
  main: {paddingLeft: 0, paddingTop: 0},
}
export default Navigation;
