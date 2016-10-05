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
import RosterVar from './Athletics/Baseball/VarsityBaseball/Roster/RosterVar'
import ScheduleVar from './Athletics/Baseball/VarsityBaseball/Schedule/ScheduleVar'
import ScoresVar from './Athletics/Baseball/VarsityBaseball/Scores/ScoresVar'
import ScheduleJV from './Athletics/Baseball/JVBaseball/Schedule/ScheduleJV'
import ScoresJV from './Athletics/Baseball/JVBaseball/Scores/ScoresJV'
import RosterJV from './Athletics/Baseball/JVBaseball/Roster/RosterJV'
import BBBallRosterFreshman from './Athletics/Basketball/BoysBasketball/BoysFreshmanBasketball/Roster/BBBallRosterFreshman'
import BBBallScheduleFreshman from './Athletics/Basketball/BoysBasketball/BoysFreshmanBasketball/Schdule/BBBallScheduleFreshman'
import BBBallScoreFreshman from './Athletics/Basketball/BoysBasketball/BoysJVBasketball/Scores/BBBallScoresJV'
import BBBallRosterJV from './Athletics/Basketball/BoysBasketball/BoysJVBasketball/Roster/BBBallRosterJV'
import BBBallScheduleJV from './Athletics/Basketball/BoysBasketball/BoysJVBasketball/Schedule/BBBallScheduleJV'
import BBBallScoresJV from './Athletics/Basketball/BoysBasketball/BoysJVBasketball/Scores/BBBallScoresJV'
import BBBallRosterVar from './Athletics/Basketball/BoysBasketball/BoysVarsityBasketball/Rosters/BBBallRosterVar'
import BBBallScheduleVar from './Athletics/Basketball/BoysBasketball/BoysVarsityBasketball/Schedule/BBBallScheduleVar'
import BBBallScoresVar from './Athletics/Basketball/BoysBasketball/BoysVarsityBasketball/Scores/BBBallScoresVar'
import GBBallRosterFresh from './Athletics/Basketball/GirlsBasketball/GirlsFreshmenBasketball/Roster/GBBallRosterFresh'
import GBBallScheduleFresh from './Athletics/Basketball/GirlsBasketball/GirlsFreshmenBasketball/Schedule/GBBallScheduleFresh'
import GBBallScoresFresh from './Athletics/Basketball/GirlsBasketball/GirlsFreshmenBasketball/Scores/GBBallScoresFresh'
import GBBallRosterJV from './Athletics/Basketball/GirlsBasketball/GirlsJVBasketball/Roster/GBBallRosterJV'
import GBBallScheduleJV from './Athletics/Basketball/GirlsBasketball/GirlsJVBasketball/Schedule/GBBallScheduleJV'
import GBBallScoresJV from './Athletics/Basketball/GirlsBasketball/GirlsFreshmenBasketball/Scores/GBBallScoresFresh'
import GBBallRosterVar from './Athletics/Basketball/GirlsBasketball/GirlsVarsityBasketball/Roster/GBBallRosterVar'
import GBBallScheduleVar from './Athletics/Basketball/GirlsBasketball/GirlsVarsityBasketball/Schedule/GBBallScheduleVar'
import GBBallScoresVar from './Athletics/Basketball/GirlsBasketball/GirlsVarsityBasketball/Scores/GBBallScoresVar'
import FootballRosterFresh from './Athletics/Football/FreshmenFootball/Roster/FootballRosterFresh'
import FootballScheduleFresh from './Athletics/Football/FreshmenFootball/Schedule/FootballScheduleFresh'
import FootballScoresFresh from './Athletics/Football/FreshmenFootball/Scores/FootballScoresFresh'
import FootballRosterJV from './Athletics/Football/JVFootball/Roster/FootballRosterJV'
import FootballScheduleJV from './Athletics/Football/JVFootball/Schedule/FootballScheduleJV'
import FootballScoresJV from './Athletics/Football/JVFootball/Scores/FootballScoresJV'
import FootballRosterVar from './Athletics/Football/VarsityFootball/Roster/FootballRosterVar'
import FootballScheduleVar from './Athletics/Football/VarsityFootball/Schedule/FootballScheduleVar'
import FootballScoresVar from './Athletics/Football/VarsityFootball/Scores/FootballScoresVar'
import SoccerBRosterJV from './Athletics/Soccer/Boys/BoysJVSoccer/Roster/SoccerBRosterJV'
import SoccerBScheduleJV from './Athletics/Soccer/Boys/BoysJVSoccer/Schedule/SoccerBScheduleJV'
import SoccerBScoresJV from './Athletics/Soccer/Boys/BoysJVSoccer/Scores/SoccerBScoresJV'
import SoccerBRosterVar from './Athletics/Soccer/Boys/BoysVarsitySoccer/Roster/SoccerBRosterVar'
import SoccerBScheduleVar from './Athletics/Soccer/Boys/BoysVarsitySoccer/Schedule/SoccerBScheduleVar'
import SoccerBScoresVar from './Athletics/Soccer/Boys/BoysVarsitySoccer/Scores/SoccerBScoresVar'
import SoccerGRosterJV from './Athletics/Soccer/Girls/GirlJVSoccer/Roster/SoccerGRosterJV'
import SoccerGScheduleJV from './Athletics/Soccer/Girls/GirlJVSoccer/Schedule/SoccerGScheduleJV'
import SoccerGScoresJV from './Athletics/Soccer/Girls/GirlJVSoccer/Scores/SoccerGScoresJV'
import SoccerGRosterVar from './Athletics/Soccer/Girls/GirlVarsitySoccer/Roster/SoccerGRosterVar'
import SoccerGScheduleVar from './Athletics/Soccer/Girls/GirlVarsitySoccer/Schedule/SoccerGScheduleVar'
import SoccerGScoresVar from './Athletics/Soccer/Girls/GirlVarsitySoccer/Scores/SoccerGScoresVar'
import SoftballRosterJV from './Athletics/Softball/SoftballJV/Roster/SoftballRosterJV'
import SoftballScheduleJV from './Athletics/Softball/SoftballJV/Schedule/SoftballScheduleJV'
import SoftballScoresJV from './Athletics/Softball/SoftballJV/Scores/SoftballScoresJV'
import SoftballRosterVar from './Athletics/Softball/SoftballVarsity/Roster/SoftballRosterVar'
import SoftballScheduleVar from './Athletics/Softball/SoftballVarsity/Schedule/SoftballScheduleVar'
import SoftballScoresVar from './Athletics/Softball/SoftballVarsity/Scores/SoftballScoresVar'
import SwimRosterBoysJV from './Athletics/Swimming/Boys/BoysJVSwim/Roster/SwimRosterBoysJV'
import SwimSchedulerBoysJV from './Athletics/Swimming/Boys/BoysJVSwim/Schedule/SwimSchedulerBoysJV'
import SwimScoresBoysJV from './Athletics/Swimming/Boys/BoysJVSwim/Scores/SwimScoresBoysJV'
import SwimRosterBoysVar from './Athletics/Swimming/Boys/BoysVarsitySwim/Roster/SwimRosterBoysVar'
import SwimScheduleBoysVar from './Athletics/Swimming/Boys/BoysVarsitySwim/Schedule/SwimScheduleBoysVar'
import SwimScoresBoysVar from './Athletics/Swimming/Boys/BoysVarsitySwim/Scores/SwimScoresBoysVar'
import SwimRosterGirlsJV from './Athletics/Swimming/Girls/GirlsJVSwim/Roster/SwimRosterGirlsJV'
import SwimScheduleGirlsJV from './Athletics/Swimming/Girls/GirlsJVSwim/Schedule/SwimScheduleGirlsJV'
import SwimScoresGirlsJV from './Athletics/Swimming/Girls/GirlsJVSwim/Scores/SwimScoresGirlsJV'
import SwimRosterGirlsVar from './Athletics/Swimming/Girls/GirlsVarsitySwim/Roster/SwimRosterGirlsVar'
import SwimScheduleGirlsVar from './Athletics/Swimming/Girls/GirlsVarsitySwim/Schedule/SwimScheduleGirlsVar'
import SwimScoresGirlsVar from './Athletics/Swimming/Girls/GirlsVarsitySwim/Scores/SwimScoresGirlsVar'


import TennisBoysRosterVar from './Athletics/Tennis/Boys/BoysVarsityTennis/Roster/TennisBoysRosterVar'
import TennisBoysScheduleVar from './Athletics/Tennis/Boys/BoysVarsityTennis/Schedule/TennisBoysScheduleVar'
import TennisBoysScoresVar from './Athletics/Tennis/Boys/BoysVarsityTennis/Scores/TennisBoysScoresVar'
import TennisGirlsRosterVar from './Athletics/Tennis/Girls/GirlsVarsityTennis/Roster/TennisGirlsRosterVar'
import TennisGirlsScheduleVar from './Athletics/Tennis/Girls/GirlsVarsityTennis/Schedule/TennisGirlsScheduleVar'
import TennisGirlsScoresVar from './Athletics/Tennis/Girls/GirlsVarsityTennis/Scores/TennisGirlsScoresVar'







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

        styles={drawerStyles}      >

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
<Events navigator={navigator}/>
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
case "VarsityRoster":                       // Boys Baseball Begins
return (
<RosterVar navigator={navigator}/>
)
case "VarsitySchedule":
return (
<ScheduleVar navigator={navigator}/>
)
case "VarsityScores":
return (
<ScoresVar navigator={navigator}/>
)
case "JVRoster":
return (
<RosterJV navigator={navigator}/>
)
case "JVSchedule":
return (
<ScheduleJV navigator={navigator}/>
)
case "JVScores":
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

  onSelect (route) {
    if(this._nav){
      this._nav.push({
        name: route
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
