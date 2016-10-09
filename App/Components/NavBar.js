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
import Athletics from './Athletics'
import Events from './Events'
import Settings from './Settings'
import BellSchedule from './BellSchedule'
import Voting from './Voting'



class NavBar extends Component {


//FootballRosterFresh


  render() {
    var self = this;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}


        content={<DrawerContent onSelect={this.onSelect.bind(this)}/>}


        openDrawerOffset={.4}
        panCloseMask={.2}
        panOpenMask={.2}
        acceptTap={true}

        styles={drawerStyles}>

        <Navigator

          initialRoute={{name: 'Home'}}
          ref={(ref) =>this._nav = ref}
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

 case "Athletics":
 return (
 <Athletics navigator={navigator}/>
)
case "Events":
return (
<Events navigator={navigator} group={route.group}/>
)
case "Settings":
return (
<Settings navigator={navigator}/>
)
case "BellSchedule":
return (
<BellSchedule navigator={navigator}/>
)
case "Voting":
return (
<Voting navigator={navigator}/>
)
                          //Boys basketball Ends


    }
  }


  closeDrawer = () => {
    this._drawer.close()
  }

  openDrawer = () => {
    this._drawer.open()
  }

  onSelect (route, group) {
    if(this._nav){
      this._nav.push({
        name: route,
        group: group
      });
      this._drawer.close();
      this.setState({currentPage: route})
    }
  }



}

const drawerStyles = {
  drawer: { shadowColor: '#4d5966',backgroundColor:'#282a2e', shadowOpacity: 15, shadowRadius: 35 ,},
  main: {paddingLeft: 0, paddingTop: 0},
}
export default NavBar;
