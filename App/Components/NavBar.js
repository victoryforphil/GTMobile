import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator
} from 'react-native';

import links from './links'
import Drawer from 'react-native-drawer'
import DrawerContent from "./DrawerContent"
import Classes from './Classes'
import Home from './Home'
import Athletics from './Athletics'
import Events from './Events'
import Settings from './Settings'
import BellSchedule from './BellSchedule'
import Voting from './Voting'
import Seniors from './Seniors'
import Juniors from './Juniors'
import Sophmores from './Sophmores'
import Freshmen from './Freshmen'
import RosterVar from './Athletics/Baseball/VarsityBaseball/Roster/RosterVar'

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
case "Seniors":
return (
<Seniors navigator={navigator}/>
)
case "Juniors":
return (
<Juniors navigator={navigator}/>
)
case "Sophmores":
return (
<Sophmores navigator={navigator}/>
)
case "Freshmen":
return (
<Freshmen navigator={navigator}/>
)
case "VarsityRosterBaseball":                       // Boys Baseball Begins
return (
<RosterVar navigator={navigator}/>
)
case "VarsityScheduleBaseball":
return (
<ScheduleVar navigator={navigator}/>
)
case "VarsityScoresBaseball":
return (
<ScoresVar navigator={navigator}/>
)
case "JVRosterBaseball":
return (
<RosterJV navigator={navigator}/>
)
case "JVScheduleBaseball":
return (
<ScheduleJV navigator={navigator}/>
)
case "JVScoresBaseball":
return (
<ScoresJV navigator={navigator}/>               // Boys Baseball ends
)
case "rosterforfreshbbball":                     //Boys Basketball Begins
return (
<BBBallRosterFreshman navigator={navigator}/>
)
case "scheduleforfreshbbball":
return (
<BBBallScheduleFreshman navigator={navigator}/>
)
case "scoreforfreshbbball":
return (
<BBBallScoreFreshman navigator={navigator}/>
)
case "rosterforjvbbball":
return (
<GBBallRosterJV navigator={navigator}/>
)
case "scheduleforjvbball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvbbball":
return (
<BBBallScoresJV navigator={navigator}/>
)
case "rosterforjvbbball":
return (
<GBBallRosterJV navigator={navigator}/>
)
case "rosterforvarbbball":
return (
<BBBallRosterVar navigator={navigator}/>
)
case "scheduleforVarbbball":
return (
<BBBallScheduleVar navigator={navigator}/>
)
case "scoreforVarbbball":
return (
<BBBallScoresVar navigator={navigator}/>
)                                                 //Boys basketball Ends





case "rosterforGfreshbball":                      //Girls basketball Begins
return (
<GBBallRosterFresh navigator={navigator}/>
)
case "scheduleforGfreshbball":
return (
<GBBallScheduleFresh navigator={navigator}/>
)
case "scoreforGfreshbball":
return (
<GBBallScoresFresh navigator={navigator}/>
)

case "rosterforGjvbball":
return (
<GBBallRosterJV navigator={navigator}/>
)
case "scheduleforGjvbball":
return (
<GBBallScheduleJV navigator={navigator}/>
)

case "scoreforjvGbball":
return (
<GBBallScoresJV navigator={navigator}/>
)
case "rosterforGVarbball":
return (
<GBBallRosterVar navigator={navigator}/>
)
case "scheduleforGVarbball":
return (
<GBBallScheduleVar navigator={navigator}/>
)
case "scoreforGVarbball":
return (
<GBBallScoresVar navigator={navigator}/>
)                                               //Girls basketball Ends


case "rosterforFreshfootball":                      //football beginning
return (
<FootballRosterFresh navigator={navigator}/>
)
case "scheduleforfreshfootball":
return (
<FootballScheduleFresh navigator={navigator}/>
)
case "scoresforfreshfootball":
return (
<FootballScoresFresh navigator={navigator}/>
)
case "rosterforJVfootball":
return (
<FootballRosterJV navigator={navigator}/>
)
case "scheduleforJVfootball":
return (
<FootballScheduleJV navigator={navigator}/>
)
case "scoreforJVfootball":
return (
<FootballScoresJV navigator={navigator}/>
)
case "rosterforVarfootball":
return (
<FootballRosterVar navigator={navigator}/>
)
case "scheduleforVarfootball":
return (
<FootballScheduleVar navigator={navigator}/>
)
case "scoreforVarfootball":
return (
<FootballScoresVar navigator={navigator}/>      //end football
)

case "rosterforjvbsoccer":                     //Boys Soccer Begins
return (
<SoccerBRosterJV navigator={navigator}/>
)
case "scheduleforjvbsoccer":
return (
<SoccerBScheduleJV navigator={navigator}/>
)
case "scoreforjvbsoccer":
return (
<SoccerBScoresJV navigator={navigator}/>
)
case "rosterforvarbsoccer":
return (
<SoccerBRosterVar navigator={navigator}/>
)
case "scheduleforVarbsoccer":
return (
<SoccerBScheduleVar navigator={navigator}/>
)
case "scoreforVarbsoccer":
return (
<SoccerBScoresVar navigator={navigator}/>
)                                                 //Boys soccer Ends




case "rosterforjvgsoccer":                       //Girls soccer Begins
return (
<SoccerGRosterJV navigator={navigator}/>
)
case "scheduleforjvgsoccer":
return (
<SoccerGScheduleJV navigator={navigator}/>
)
case "scoreforjvgsoccer":
return (
<SoccerGScoresJV navigator={navigator}/>
)
case "rosterforvargsoccer":
return (
<SoccerGRosterVar navigator={navigator}/>
)
case "scheduleforVargsoccer":
return (
<SoccerGScheduleVar navigator={navigator}/>
)
case "scoreforVargsoccer":
return (
<SoccerGScoresVar navigator={navigator}/>
)                                               //Girls soccer ends


case "rosterforjvsoftball":                     //softball Begins
return (
<SoftballRosterJV navigator={navigator}/>
)
case "scheduleforjvsoftball":
return (
<SoftballScheduleJV navigator={navigator}/>
)
case "scoreforjvsoftball":
return (
<SoftballScoresJV navigator={navigator}/>
)
case "rosterforvarsoftball":
return (
<SoftballRosterVar navigator={navigator}/>
)
case "scheduleforVarsoftball":
return (
<SoftballScheduleVar navigator={navigator}/>
)
case "scoreforVarsoftball":
return (
<SoftballScoresVar navigator={navigator}/>
)                                                 //softball  Ends



case "rosterforjvbswim":                     //Boys swimming Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                                 //Boys swimming Ends




case "rosterforjvgswim":                       //Girls swimming Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                               //Girls swimming ends


case "rosterforjvbswim":                     //Boys tennis Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                                 //Boys tennis Ends




case "rosterforjvgswim":                       //Girls tennis Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                               //Girls tennis ends


case "rosterforjvbswim":                     //Boys track Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVarbswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                                 //Boys track Ends




case "rosterforjvgswim":                       //Girls track Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvgswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforVargswim":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                               //Girls track ends


case "rosterforfreshvolleyball":                       //Girls Volleyball Begins
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforfreshvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforfreshvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforjvvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)

case "scheduleforjvvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforjvvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "rosterforvarvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scheduleforvarvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)
case "scoreforvarvolleyball":
return (
<BBBallScheduleJV navigator={navigator}/>
)                                               //Girls Volleyball Ends



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
