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
import NavBar from './NavBar'


class DrawerContent extends Component {

  constructor(props) {
        super(props);
        this.state = {
          id: "main"
        };
    }

  render() {

    switch(this.state.id){
      case "main":
    return(
      <ScrollView >

        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Home")}}>
          <Text style={ styles.DrwrTex}><Icon name="home" size={30 } sytle={styles.icons}  />   Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Classes")}}>
        <Text style={ styles.DrwrTex}><Icon name="school" size={30 } sytle={styles.icons}  />   Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Events")}}>
          <Text style={ styles.DrwrTex}><Icon name="event" size={30 } sytle={styles.icons}  />   Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({id: "Athleticsbutton"})}>
          <Text style={ styles.DrwrTex}><Icon name="directions-run" sytle={styles.icons} size={30 }  />   Athletics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("BellSchedule")}}>
          <Text style={ styles.DrwrTex}><Icon name="alarm" size={30 } sytle={styles.icons}  />   Bell schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Voting")}}>
          <Text style={ styles.DrwrTex}><Icon name="favorite" size={30 } sytle={styles.icons}  />   Voting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Settings")}}>
          <Text style={ styles.DrwrTex}><Icon name="settings" size={30 } sytle={styles.icons}  />   Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    );
    case "Athleticsbutton":
    return (
      <ScrollView >

        <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"main"})}>
          <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Baseballpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="toll" size={30 } sytle={styles.icons}  />   BaseBall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Basketballpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Footballpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="album" size={30 } sytle={styles.icons}  />   Football</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Soccerpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="play-circle-outline" size={30 } sytle={styles.icons}  />   Soccer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Softballpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="add-circle" size={30 } sytle={styles.icons}  />   Softball</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Swimmingpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="computer" size={30 } sytle={styles.icons}  />   Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Tennispressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="adb" size={30 } sytle={styles.icons}  />   Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Trackpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="power" size={30 } sytle={styles.icons}  />   Track & Field</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Volleyballpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="wifi" size={30 } sytle={styles.icons}  />   Volleyball</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Wrestlingpressed"})}>
          <Text style={ styles.DrwrTex}><Icon name="child-care" size={30 } sytle={styles.icons}  />   Wrestling</Text>
        </TouchableOpacity>


      </ScrollView>
    )
    case "Baseballpressed":
    return (
        <ScrollView >
        <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
          <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"JVOptions"})}>
        <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"VarsityOptions"})}>
        <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
      </TouchableOpacity>
        </ScrollView >
    )
    case "VarsityOptions":
    return(
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Baseballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("VarsityRoster")}}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("VarsitySchedule")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("VarsityScores")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
  )
  case "JVOptions":
  return(
  <ScrollView >
  <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Baseballpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("JVRoster")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
  </TouchableOpacity>
<TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("JVSchedule")}}>
  <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("JVScores")}}>
  <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
</TouchableOpacity>
  </ScrollView >
)
case "Basketballpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "Boypressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Basketballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"BBBallFreshmanpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Freshman</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"BBBallJVpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"BBBallVarpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "BBBallFreshmanpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforfreshbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforfreshbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforfreshbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
  )
case "BBBallJVpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforjvbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforjvbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scoreforjvbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
  )
    case "BBBallVarpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scoreforVarbbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "Girlpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Basketballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"GBBALLFreshmanpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Freshman</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"GBBALLJVpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"GBBALLVarsitypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "GBBALLFreshmanpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Girlpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforGfreshbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforGfreshbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scoreforGfreshbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "GBBALLJVpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Girlpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforjvGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforGjvbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scoreforjvGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "GBBALLVarsitypressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Girlpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforGVarbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scoreforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "Footballpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"footballfreshmanpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Freshman</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"FootballJVpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"FootballVarpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "footballfreshmanpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Footballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "FootballJVpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Footballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "FootballVarpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Footballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)


case "Soccerpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerBoysPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerGirlsPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)

case "SoccerBoysPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Soccerpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerBoysJVPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerBoysVarPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "SoccerBoysJVPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SoccerBoyspressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SoccerBoysVarPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SoccerBoyspressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SoccerGirlsPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Soccerpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerGirlsJVPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerGirlsVarPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SoccerGirlsJVPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SoccerGirlsPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SoccerGirlsVarPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SoccerGirlsPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "Softballpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoftballVarpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoftballJVpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "SoftballJVpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Softballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "SoftballVarpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Softballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)


case "Swimmingpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SwimmingBoysPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SwimmingGirlsPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)

case "SwimmingBoysPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Swimmingpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerBoysJVPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Junior Varsit</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerBoysVarPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "SwimmingBoysJVPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SwimmingBoysPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SwimmingBoysVarPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SwimmingBoysPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SwimmingGirlsPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Swimmingpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerGirlsJVPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"SoccerGirlsVarPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SwimmingGirlsJVPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SwimmingGirlsPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)

case "SwimmingGirlsVarPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"SwimmingGirlsPressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "Tennispressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"TennisBoysPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"TennisGirlsPressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)



case "TennisBoysPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Tennispressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)



case "TennisGirlsPressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Tennispressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "Trackpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"TrackBoyspressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"TrackGirlspressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)

case "TrackBoyspressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Trackpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)



case "TrackGirlspressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Trackpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("rosterforvarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Roster</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={()=>{this.props.onSelect("scheduleforVarGbball")}}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>

    </ScrollView >
)
case "Volleyballpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"VolleyballFreshmanpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Freshman</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"VolleyballJVpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Junior Varsity</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"VolleyballVarpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Varsity</Text>
  </TouchableOpacity>
    </ScrollView >
)

case "VolleyballFreshmanpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Volleyballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "VolleyballJVpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Volleyballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)
case "VolleyballVarpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Volleyballpressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
      <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Roster</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />    Schedule</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Scores</Text>
  </TouchableOpacity>
    </ScrollView >
)

case "Wrestlingpressed":
return (
    <ScrollView >
    <TouchableOpacity style={styles.backbutton} onPress={() => this.setState({id:"Athleticsbutton"})}>
      <Text style={ styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons}  />   Back</Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Boypressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Boys</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.newbutton} onPress={() => this.setState({id:"Girlpressed"})}>
    <Text style={ styles.DrwrTex}><Icon name="visibility" size={30 } sytle={styles.icons}  />   Girls</Text>
  </TouchableOpacity>
    </ScrollView >
)
  }
}
}
const styles = StyleSheet.create({
    button: {
    borderWidth: .5,
    borderColor: 'black',
    padding: 25,
    flexDirection: 'row'

  },
  backbutton: {
  borderWidth: .5,
  borderColor: 'black',
  padding: 15,
  flexDirection: 'row'

},
newbutton: {
borderWidth: .5,
borderColor: 'black',
padding: 25,
flexDirection: 'row'

},
  icons: {
    color: '#00CED1',
    padding: 30,
marginTop: 15
  },
  DrwrTex: {
    color: '#00CED1'
  }
})
export default DrawerContent
